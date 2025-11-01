import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const CourseCard = ({course}) => {
  const {calculateCourseDuration} = useContext(AppContext)

  return (
    <Link to={'/course/' + course.id} onClick={()=>scrollTo(0,0)} className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg'>
      <div className="relative">
        <img className="w-full" src={course.image_url} alt={course.title} />
        {/* <img className="w-full" src={`http://localhost:3000/api/image?id=1o4xXPkeGpUxoXmHfmWnSv3UWtNfJ18ZY`} alt={course.title} /> */}
        <span className="absolute top-2 right-2 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full shadow-md">
          {calculateCourseDuration(course)}
        </span>
      </div>
      <div className='p-3 text-left'>
        <h3 className='text-base font-semibold'>{course.title}</h3>
        <p className='text-gray-500'>{course.description}</p>
      </div>
    </Link>
  )
}

export default CourseCard