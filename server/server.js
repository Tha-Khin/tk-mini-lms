import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { getAllCourses, getCourseById, getImage } from './controllers/courseController.js';
import { checkToken, login, logout } from './controllers/authController.js';

// Initialize Express
const app = express()

const allowedOrigins = ['http://localhost:5173', 'https://tk-mini-lms.vercel.app'];

// Middlewares
app.use(express.json());
app.use(cors({origin: allowedOrigins}))

// Routes
app.get('/', (req, res)=> res.send("API Working"))
app.post('/api/auth/login', login)
app.post('/api/auth/check', checkToken)
app.post('/api/auth/logout', logout)
app.get('/api/courses/all', getAllCourses)
app.get('/api/courses/:id', getCourseById)
app.get('/api/image', getImage)

// Port
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))