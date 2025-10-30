import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import CourseDetails from './pages/CourseDetails'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';
import ProtectedRoutes from './utils/ProtectedRoutes'
import Login from './pages/Login'

const App = () => {

  return (
    <div className='text-default min-h-screen bg-white'>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/course/:id' element={<CourseDetails/>}/>
        </Route>
        <Route path='/loading/:path' element={<Loading/>}/>
      </Routes>
    </div>
  )
}

export default App