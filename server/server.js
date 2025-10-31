import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { getAllCourses, getCourseById } from './controllers/courseController.js';
import { checkToken, login, logout } from './controllers/authController.js';

// Initialize Express
const app = express()

// Middlewares
app.use(express.json());
app.use(cors())

// Routes
app.get('/', (req, res)=> res.send("API Working"))
app.post('/api/auth/login', login)
app.post('/api/auth/check', checkToken)
app.post('/api/auth/logout', logout)
app.get('/api/courses/all', getAllCourses)
app.get('/api/courses/:id', getCourseById)

// Port
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))