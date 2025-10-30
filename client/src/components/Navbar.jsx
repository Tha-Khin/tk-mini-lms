import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const { navigate, token, logout } = useContext(AppContext)

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 bg-cyan-100/70`}>
      <img onClick={()=>navigate('/')} src={assets.logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer'/>
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
        {token ? 
          <button onClick={()=> logout()} className='bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer'>Logout</button>
          :
          <button onClick={()=> navigate('/login')} className='bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer'>Login</button>}
      </div>
      {/* For Phone Screens */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        {
          token ? 
          <button onClick={()=> logout()} className='bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer'>Logout</button> 
          : 
          <button onClick={()=> navigate('/login')} className='cursor-pointer'><img src={assets.user_icon} alt="" /></button> 
        }
      </div>
    </div>
  )
}

export default Navbar