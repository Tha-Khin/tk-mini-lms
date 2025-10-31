import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import CourseCard from './CourseCard'

const CoursesSection = () => {
  const {allCourses} = useContext(AppContext)

  return (
    <div className='py-16 px-8 md:px-40 bg-linear-to-b from-cyan-100/70 w-full'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>Discover our top-rated courses across various categories. From coding and design to <br/> business and wellness, our courses are crafted to deliver results.</p>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-4 md:px-0 md:my-16 my-10 gap-4'>
        {allCourses.slice(0,5).map((course, index)=> <CourseCard key={index} course={course}/>)}
      </div>
    </div>
  )
}

export default CoursesSection