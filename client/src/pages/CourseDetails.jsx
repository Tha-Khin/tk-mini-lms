import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Loading from '../components/Loading'
import { assets } from '../assets/assets'
import humanizeDuration from 'humanize-duration'
import Footer from '../components/Footer'
import YouTube from 'react-youtube'
import { toast } from 'react-toastify'
import OtherCourses from '../components/OtherCourses'
import axios from 'axios'

const CourseDetails = () => {
  const {id} = useParams()
  const [courseData, setCourseData] = useState(null)
  const [playerData, setPlayerData] = useState(null)

  const {calculateCourseDuration, allCourses, backendUrl} = useContext(AppContext)

  const fetchCourseData = async ()=>{
    try {
      const course = allCourses.find((c)=> c.id === Number(id))
      if(course){
        setCourseData(course)
      }else{
        const {data} = await axios.get(backendUrl + `/api/courses/${id}`)
        if(data.success){
          setCourseData(data.data)
        }else{
          toast.error("Error in Fetching a Single Course Data")
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchCourseData()
  }, [id, allCourses])

  return courseData ? ( 
    <>
    <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between px-8 md:px-36 py-20 md:py-30 text-left bg-linear-to-b min-h-100 from-cyan-100/70'>

      {/* left column */}
      <div className='max-w-xl z-10 text-gray-500'>
        <h1 className='md:text-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800'>{courseData.title}</h1>
        <p className='text-sm'>Course of <span className='text-blue-600 underline'>TK Co., Ltd</span></p>
        <p className='pt-6 md:text-base text-sm' dangerouslySetInnerHTML={{__html: courseData.description.slice(0,200)}}></p>
        
        <div className='pt-8 text-gray-800'>
          <h2 className='text-xl font-semibold'>Course Structure</h2>
          <div className='border border-gray-300 bg-white mb-2 rounded max-w-100 min-w-[420px] md:min-w-[600px] mt-2'>
            <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none'>
              <div className='flex items-center gap-2'>
                <img src={assets.down_arrow_icon} alt="arrow icon" />
                <p className='font-medium md:text-base text-sm'>Lectures</p>
              </div>
              <p className='text-sm md:text-default'>{JSON.parse(courseData.lessons).length} lessons - {calculateCourseDuration(courseData)}</p>
            </div>
            <div className={`overflow-hidden transition-all duration-300 max-h-96`}>
              <ul className='list-disc pl-4 md:pl-10 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                {JSON.parse(courseData.lessons).map((lecture, i)=>(
                  <li key={i} className='flex items-start gap-2 py-2'>
                    <img src={assets.play_icon} alt="play icon" className='w-4 h-4 mt-1'/>
                    <div className='flex items-center justify-between w-full text-gray-800 text-xs md:text-default'>
                      <p>{lecture[0]}</p>
                      <div className='flex gap-2'>
                        <p onClick={()=> {setPlayerData({videoId: lecture[1]}); window.scrollTo({ top: 0, behavior: "smooth" })}} className='text-blue-500 cursor-pointer ml-2'>Play Video</p>
                        <p>{humanizeDuration(lecture[2] * 60 * 1000, {units: ['h', 'm']})}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* right column */}
      <div className='max-w-100 z-10 min-w-[300px] sm:min-w-[420px]'>

        {
          playerData ? 
            <YouTube videoId={playerData.videoId} opts={{playerVars: {autoplay: 1}}} iframeClassName='w-full aspect-video'/>
          : <img src={courseData.image_url} alt="" />
        }
        
        <div className='p-5 flex items-center text-sm md:text-default gap-4 text-gray-500 shadow-custom-card rounded-t md:rounded-none overflow-hidden bg-white'>
          <div className='flex items-center gap-1'>
            <img src={assets.lesson_icon} alt="clock icon" />
            <p>{JSON.parse(courseData.lessons).length} lessons</p>
          </div>
          <div className='h-4 w-px bg-gray-500/40'></div>
          <div className='flex items-center gap-1'>
            <img src={assets.time_clock_icon} alt="clock icon" />
            <p>{calculateCourseDuration(courseData)}</p>
          </div>
        </div>
        <button onClick={() => window.open(courseData.quiz_link, "_blank", "noopener,noreferrer")} className='md:mt-6 mt-4 w-full py-3 rounded bg-blue-600 text-white font-medium cursor-pointer'>Take Quiz</button>
      </div>
    </div>
    <OtherCourses currentId={id}/>
    <Footer/>
    </>
  ) : <Loading/>
}

export default CourseDetails