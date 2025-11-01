import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import CourseCard from './CourseCard'

const OtherCourses = ({currentId}) => {
  
  const {allCourses} = useContext(AppContext)
  const others = [];

  allCourses.forEach(row => {
    if (row.id !== Number(currentId)) {
      others.push({
        id: row.id,
        title: row.title,
        description: row.description,
        image_url: row.image_url,
        lessons: row.lessons
      });
    }
  });

  return (
    <div className='px-8 md:px-36 pb-15'>
      <h2 className='text-3xl font-medium text-gray-800 mb-15 text-center'>Other Courses</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {others.slice(0,4).map((course, index)=> <CourseCard key={index} course={course}/>)}
      </div>
    </div>
  )
}

export default OtherCourses