import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import sample_img_9 from './sample_img_9.png'
import sample_image_3 from './sample_image_3.png'
import sample_image_4 from './sample_image_4.png'
import sample_image_5 from './sample_image_5.png'
import sample_image_6 from './sample_image_6.png'
import sample_image_7 from './sample_image_7.png'
import sample_image_8 from './sample_image_8.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import name_icon from './name_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    sample_img_9,
    sample_image_3,
    sample_image_4,
    sample_image_5,
    sample_image_6,
    sample_image_7,
    sample_image_8,
    email_icon,
    lock_icon,
    name_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    razorpay_logo,
    stripe_logo
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Chris Hemsworth',
        role:'Graphic Designer',
        stars:4,
        text:`This text-to-image generator is absolutely amazing! I was able to turn my ideas into beautiful, detailed artwork within seconds. The interface is simple, fast, and beginner-friendly.`
    },
    {
        image:profile_img_2,
        name:'Shruthi Hasan',
        role:'Content Creator',
        stars:5,
        text:`I’m really impressed with how well this website works. The images look professional, and the variety of styles is incredible. Highly recommended for anyone looking to create unique visuals instantly!`
    },
    {
        image:profile_img_3,
        name:'Rinol Jeo',
        role:'UI/UX Designer',
        stars:4,
        text:`The quality of the generated pictures surprised me! Every prompt I tried gave me something different and creative. The website runs smoothly, and the results are better than most paid tools.`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]