import express from 'express'
import {
    userCredits,
    paymentRazorpay,
    verifyRazorpay,
    registerUser,
    loginUser,
    paymentStripe,
    verifyStripe,
    paymentMock
} from '../controllers/UserController.js'
import authUser from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits', authUser, userCredits)
userRouter.post('/pay-razor', authUser, paymentRazorpay)
userRouter.post('/verify-razor', verifyRazorpay)
userRouter.post('/pay-stripe', authUser, paymentStripe)
userRouter.post('/verify-stripe', authUser, verifyStripe)
userRouter.post('/pay-mock', authUser, paymentMock)

export default userRouter