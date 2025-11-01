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

export const getImage = async (req, res)=>{
    const {id} = req.params
    try {
        // Fetch from Google Apps Script endpoint
        const response = await axios.get(
        process.env.GAS_URL + '?action=getImage&id=' + id,
        { responseType: "arraybuffer" } // important for image data
        );

        res.setHeader("Content-Type", "image/jpg");
        res.send(response.data);

    } catch (error) {
        console.error("Error fetching image:", error.message);
        res.status(500).send("Error fetching image");
    }
}