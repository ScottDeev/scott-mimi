import signupimage from '../assests/signupimage.jpg'
import eyeicon from '../assests/eyeicon.svg'
import eyecancel from '../assests/eyecancel.svg'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
export default function SignUp() {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorFname, setErrorFname] = useState(false)
  const [errorLname, setErrorLname] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [emailValidError, setEmailValidError] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

    // Setting the input errors to false when there's a change in input
    useEffect(()=> {
      if(fname){
        setErrorFname(false)
      }
      if(lname){
        setErrorLname(false)
      }
      if(email){
        setErrorEmail(false)
        setEmailValidError(false)
      }
      if(validateEmail(email)){
        setEmailValidError(false)
      }
      if(!password){
        setErrorPassword(false)
      }
    }, [fname, lname, email, password])
  

  const validateEmail = (e) => {
    return String(e)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const passwordToggle =() =>{
    showPassword ? setShowPassword(false): setShowPassword(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!fname){
      setErrorFname(true)
    }else if(!lname){
      setErrorLname(true)
    }else if(!email){
      setErrorEmail(true)
      setEmailValidError(false)
    }else if(!validateEmail(email)){
      setEmailValidError(true)
    }else if(!password){
      setErrorPassword(true)
    }else{
      // IF no error, the form can be submitted successfully
      setErrorFname(false)
      setErrorLname(false)
      setErrorEmail(false)
      setErrorPassword(false)
      setEmailValidError(false)
    }
  }
  return (
    <div className='flex flex-row items-stretch w-full'>
      <div className='md:w-[50%] w-full lg:px-[151px] md:px-[60px] px-[16px] py-[56px]'>
        <Logo/>
        <div className='font-[400] mt-[48px]'>
          <h1 className='text-[40px]'>Create an account</h1>
          <p>Please enter your details</p>
        </div>
        <form className='w-full mt-[36px] flex flex-col gap-[24px]' onSubmit={handleSubmit}>
          <label className="flex flex-col gap-[8px] w-full">
            <span className="text-gray-700 text-[14px] font-[500]">First name</span>
            <input className={`border ${errorFname ? 'border-[#F83F23]': 'border-gray-300'} rounded-[8px] py-[10px] px-[14px] outline-[#475467]`}  type="text" placeholder="Enter your first name" onChange={(e) => setFname(e.target.value)} />
            {errorFname && <span className="text-[#F83F23] text-[14px] mt-[-12px]">Please enter your first name</span>}

          </label>
          <label className="flex flex-col gap-[8px] w-full">
            <span className="text-gray-700 text-[14px] font-[500]">Last name</span>
            <input className={`border ${errorLname ? 'border-[#F83F23]': 'border-gray-300'} rounded-[8px] py-[10px] px-[14px] outline-[#475467]`}  type="text" placeholder="Enter your last name" onChange={(e) => setLname(e.target.value)} />
            {errorLname && <span className="text-[#F83F23] text-[14px] mt-[-12px]">Please enter your last name</span>}
          </label>
          <label className="flex flex-col gap-[8px] w-full">
            <span className="text-gray-700 text-[14px] font-[500]">Email</span>
            <input className={`border ${(errorEmail || emailValidError) ? 'border-[#F83F23]': 'border-gray-300'} rounded-[8px] py-[10px] px-[14px] outline-[#475467]`}  type="text" placeholder="name@gmail.com" onChange={(e) => setEmail(e.target.value)} />
            {errorEmail && <span className="text-[#F83F23] text-[14px] mt-[-12px]">Please enter your email address</span>}
            {emailValidError && <span className="text-[#F83F23] text-[14px] mt-[-12px]">Email is incorrect</span>}
          </label>
          <label className="flex flex-col gap-[8px] w-full">
            <span className="text-gray-700 text-[14px] font-[500]">Password</span>
            <div className='flex w-full relative'>
              <input className={`w-full border ${errorPassword ? 'border-[#F83F23]': 'border-gray-300'} rounded-[8px] py-[10px] px-[14px] outline-[#475467]`} type={showPassword ? 'text': 'password'} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
              {!showPassword && <img className='absolute top-[17px] right-[16px] cursor-pointer' src={eyeicon} alt="eyeicon" onClick={() => passwordToggle()} />}
              {showPassword && <img className='absolute top-[15px] right-[16px] cursor-pointer' src={eyecancel} alt="eyeicon" onClick={() => passwordToggle()} />}
            </div>
            {errorPassword && <span className="text-[#F83F23] text-[14px] mt-[-12px]">Please enter your password</span>}
          </label>
          <p className='font-[400]'>By Registering you are automatically accepting our <span className='text-[#4CBB88] font-[850]'>Terms </span>  and 
         <span className='text-[#4CBB88] font-[850]'> Conditions </span></p>
         <label className="flex flex-col gap-[6px] w-full mt-[8px]">
          <input className="cursor-pointer border border-[#D2120F] rounded-[8px] py-[12px] px-[14px] bg-[#D2120F] text-white hover:bg-white hover:text-[#D2120F] transition-all" 
          id="btn__submit" type="submit" value="Create Account" />
        </label>
        <div>
          <p>Have an account? <Link to='/signin' className='text-[#4CBB88] font-[850]'>Login</Link> </p>
        </div>
        </form>
      </div>
      <div className='hidden md:block w-[50%]'>
        <img className='w-full h-[100%]' src={signupimage} alt="backgroundimage" />
      </div>
    </div>
  )
}