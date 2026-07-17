import axios from 'axios'
import fs from 'fs'
import FormData from 'form-data'
import userModel from '../models/userModel.js'

// Controller function to generate image from prompt
// http://localhost:4000/api/image/generate-image
export const generateImage = async (req, res) => {

  try {

    const { userId, prompt } = req.body

    // Fetching User Details Using userId
    const user = await userModel.findById(userId)
    
    if (!user || !prompt) {
      return res.json({ success: false, message: 'Missing Details' })
    }

    // Checking User creditBalance
    if (user.creditBalance <= 0) {
      return res.json({ success: false, message: 'No Credit Balance', creditBalance: user.creditBalance })
    }

    // Parse prompt for aspect ratio
    const validRatios = ['16:9', '1:1', '21:9', '2:3', '3:2', '4:5', '5:4', '9:16', '9:21'];
    let aspectRatio = '1:1'; // Default
    
    // Look for phrases like "16:9", "ar 16:9", "--ar 16:9"
    const ratioRegex = /(?:ar\s+|--ar\s+)?(\d+:\d+)/i;
    const match = prompt.match(ratioRegex);
    
    if (match && validRatios.includes(match[1])) {
      aspectRatio = match[1];
    }
    
    // Map aspect ratios to SDXL dimensions
    const dimensions = {
      '1:1': { width: 1024, height: 1024 },
      '16:9': { width: 1344, height: 768 },
      '9:16': { width: 768, height: 1344 },
      '3:2': { width: 1216, height: 832 },
      '2:3': { width: 832, height: 1216 },
      '4:5': { width: 896, height: 1088 },
      '5:4': { width: 1088, height: 896 },
      '21:9': { width: 1536, height: 640 },
      '9:21': { width: 640, height: 1536 }
    };
    
    const { width, height } = dimensions[aspectRatio];

    // Clean up prompt by removing the aspect ratio text so it doesn't confuse the AI
    const cleanPrompt = prompt.replace(ratioRegex, '').trim();

    // Calling Hugging Face API
    const { data } = await axios.post(
      'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0',
      {
        inputs: cleanPrompt,
        parameters: { width, height }
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        responseType: 'arraybuffer'
      }
    )

    // Conversion of buffer to base64
    const base64Image = Buffer.from(data, 'binary').toString('base64');
    const resultImage = `data:image/png;base64,${base64Image}`

    // Deduction of user credit 
    await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 })

    // Sending Response
    res.json({ success: true, message: "Image Generated", resultImage, creditBalance: user.creditBalance - 1 })

  } catch (error) {
    console.log(error.response ? error.response.data.toString() : error.message)
    res.json({ success: false, message: error.message })
  }
}