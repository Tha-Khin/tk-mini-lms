import CoursesSection from '../components/CoursesSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-4 text-center'>
      <CoursesSection/>
      <Footer/>
    </div>
  )
}

export default Home