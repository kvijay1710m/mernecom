import CommonForm from '@/components/common/Form'
import { registerFormControls } from '@/config'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
  userName: '',
  email: '',
  password: ''
}

const Register = () => {

  const [formData, setFormData] = useState(initialState)
  function onSubmit(){

  }
  console.log(formData);
  
  return (
    <>
      <div className='mx-auto w-full max-w-md space-y-6'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold tracking-tight text-foreground' >Create new account</h1>
          <p className='mt-2' >Aldready have an account
            <Link className='font-medium ml-2 text-primary hover:underline' to='/auth/login' >Login</Link>
          </p>
        </div>
        <CommonForm  formControls={registerFormControls}
          buttonText={'Sign up'} 
          formData={formData}
          setformData={setFormData}
          onSubmit={onSubmit}
        />
      </div>
    </>
  )
}

export default Register