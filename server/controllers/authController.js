import axios from 'axios'

// Get All Courses
export const login = async (req, res) =>{
    try {
        const response = await axios.post(process.env.GAS_URL, req.body, {headers: {'Content-Type': 'application/json'}});
        res.json(response.data);
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const checkToken = async (req, res) =>{
    try {
        const response = await axios.post(process.env.GAS_URL, req.body, {headers: {'Content-Type': 'application/json'}});
        res.json(response.data);
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const logout = async (req, res) =>{
    try {
        const response = await axios.post(process.env.GAS_URL, req.body, {headers: {'Content-Type': 'application/json'}});
        res.json(response.data);
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}