import axios from 'axios'

// Get All Courses
export const getAllCourses = async (req, res) =>{
    try {
        const response = await axios.get(process.env.GAS_URL + '?action=getCourses');
        res.json(response.data);
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// Get Course by ID
export const getCourseById = async (req, res)=>{
    const {id} = req.params
    try {
        const response = await axios.get(process.env.GAS_URL + '?action=getCourseById&id=' + id);
        res.json(response.data);
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}