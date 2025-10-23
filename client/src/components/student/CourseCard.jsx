import { Link } from 'react-router-dom'

const CourseCard = ({course}) => {
  return (
    <Link to={'/course/' + course._id} onClick={()=>scrollTo(0,0)} className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg'>
      <img className='w-full' src={course.courseThumbnail} alt="" />
      <div className='p-3 text-left'>
        <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
        <p className='text-gray-500'>{course.educator.name}</p>
      </div>
    </Link>
  )
}

export default CourseCard