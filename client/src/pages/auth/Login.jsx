import CommonForm from '@/components/common/Form'
import { loginFormControls } from '@/config'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
  email: '',
  password: ''
}

const AuthLogin = () => {

  const [formData, setFormData] = useState(initialState)
  function onSubmit() {

  }

  return (
    <>
      <div className='mx-auto w-full max-w-md space-y-6'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold tracking-tight text-foreground' >Sign in to your account</h1>
          <p className='mt-2' >Dont have an account?
            <Link className='font-medium ml-2 text-primary hover:underline' to='/auth/register' >Sign up</Link>
          </p>
        </div>
        <CommonForm
          // formControls={registerFormControls}
          //FROM COMMON FORMS-->Form.jsx
          formControls={loginFormControls} //from config index.js
          buttonText={'Sign In'}
          formData={formData}
          setformData={setFormData}
          onSubmit={onSubmit}
        />
      </div>
    </>
  )
}

export default AuthLogin