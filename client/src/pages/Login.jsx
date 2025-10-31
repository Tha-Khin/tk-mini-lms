import { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import{ toast } from 'react-toastify'

const Login = () => {

    const {navigate, backendUrl} = useContext(AppContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = async (e)=>{
      e.preventDefault();  
      try {
        const {data} = await axios.post(backendUrl + '/api/auth/login', {action: "login", email, password}, {headers: {'Content-Type': 'application/json'}})

        // const {data} = await axios.post('https://script.google.com/macros/s/AKfycbztQ-CJE4JyX6O4nSZjzBJUk5P4T1wlvRsMAes0IUTnQhTCnX5mc_Bau4RiP4VA2zUY/exec', {action: "login", email, password}, {headers: {'Content-Type': 'application/json'}})

        if(data.success){
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          localStorage.setItem("expiry", data.expiry);
          toast.success("Welcome " + data.user.name)
          navigate('/')
        }else{
          toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }
    }

  return (
    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-linear-to-b from-cyan-100/70 w-full'>
      <div className='bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm'>
        <h2 className='text-3xl font-semibold text-white text-center mb-3'>Login</h2>
        <p className='text-center text-sm mb-6'>Login to your account!</p>

        <form onSubmit={loginHandler}>
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
            <img src={assets.mail_icon} alt="" />
            <input onChange={e => setEmail(e.target.value)} value={email} className='bg-transparent outline-none' type="email" placeholder='Email id' required/>
          </div>
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
            <img src={assets.lock_icon} alt="" />
            <input onChange={e => setPassword(e.target.value)} value={password} className='bg-transparent outline-none' type="password" placeholder='Password' required/>
          </div>

          <button className='w-full py-2.5 rounded-full bg-linear-to-r from-indigo-500 to-indigo-900 text-white font-medium'>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Login