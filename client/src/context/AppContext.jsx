import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from "react-toastify";
import humanizeDuration from 'humanize-duration'

export const AppContext = createContext()

export const AppContextProvider = (props)=>{
    const navigate = useNavigate();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const token = localStorage.getItem("token");
    const expiry = localStorage.getItem("expiry");
    const [allCourses, setAllCourses] = useState([])

    // Fetch All Courses
    const fetchAllCourses = async ()=>{
        try {
            const {data} = await axios.get(backendUrl + '/api/courses/all')
            if(data.success){
                setAllCourses(data.data)
            }else{
                toast.error("Error in Fetching Courses")
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const calculateCourseDuration = (course)=>{
      let time = 0
      JSON.parse(course.lessons).map((lesson)=> time += lesson[2])
      return humanizeDuration(time * 60 * 1000, {units: ["h", "m"]})
    }

    const logout = async () => {
        const {data} = await axios.post(backendUrl + '/api/auth/logout', { action: "logout", token }, {headers: {'Content-Type': 'application/json'}});
        if(data.success){
            toast.success(data.message);
            localStorage.clear();
            navigate("/login");
        }else{
            toast.error(data.message);
        }
    };

    useEffect(()=>{
        fetchAllCourses()
    }, [])

    const value = {
        allCourses, navigate, token, expiry, logout, backendUrl, calculateCourseDuration
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
