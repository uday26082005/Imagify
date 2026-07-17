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

    // Creation of new multi/part formdata
    const formdata = new FormData()
    formdata.append('prompt', prompt)

    // Parse prompt for aspect ratio natively supported by Stability AI
    const validRatios = ['16:9', '1:1', '21:9', '2:3', '3:2', '4:5', '5:4', '9:16', '9:21'];
    let aspectRatio = '1:1'; // Default
    
    // Look for phrases like "16:9", "ar 16:9", "--ar 16:9"
    const ratioRegex = /(?:ar\s+|--ar\s+)?(\d+:\d+)/i;
    const match = prompt.match(ratioRegex);
    
    if (match && validRatios.includes(match[1])) {
      aspectRatio = match[1];
    }
    
    formdata.append('aspect_ratio', aspectRatio);
    formdata.append('output_format', 'png');

    // Calling Stability AI API
    const { data } = await axios.post('https://api.stability.ai/v2beta/stable-image/generate/core', formdata, {
      headers: {
        'Authorization': `Bearer ${process.env.STABILITY_API_KEY}`,
        'Accept': 'image/*',
        ...formdata.getHeaders()
      },
      responseType: "arraybuffer"
    })

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