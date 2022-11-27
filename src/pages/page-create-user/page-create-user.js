import { ErrorMessage } from '@hookform/error-message'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { add_user } from '../../actions/actions'
const generateID = () => Math.floor(Math.random() * 10000)

const PageCreateUser = () => {
  const dispatch = useDispatch()

  const defaultValues = {
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    address: ''
  }

  const { register, handleSubmit, formState: { errors }, reset } = useForm({defaultValues})

  const onSubmit = (values) => {
    dispatch(add_user({...values, id: generateID()}))
    reset()
  }
  
  return (
    <div className='page'>
      <form onSubmit={handleSubmit(onSubmit)} className='form'>

        <div className='basic-field'>
          <input 
            placeholder='name'
            {...register('name', { required: true, minLength: 2 })}
          />
          <ErrorMessage
            errors={errors}
            name='name'
            message='name field should has 2 symbols at least'
            render={({ message }) => <p className='error-message'>{message}</p>}
          />
        </div>

        <div className='basic-field'>
          <input 
            placeholder='surname'
            {...register('surname', { required: true, minLength: 2 })}
          />
          <ErrorMessage
            errors={errors}
            name='surname'
            message='surname field should has 2 symbols at least'
            render={({ message }) => <p className='error-message'>{message}</p>}
          />
        </div>

        <div className='basic-field'>
          <input 
            placeholder='email'
            type='email'
            {...register('email', { required: true, minLength: 10 })}
          />
          <ErrorMessage
            errors={errors}
            name='email'
            message='email field shoud has included "@gmail.com"'
            render={({ message }) => <p className='error-message'>{message}</p>}
          />
        </div>

        <div className='basic-field'>
          <input 
            placeholder='phone number'
            {...register('phoneNumber', { required: true, minLength: 10 })}
          />
          <ErrorMessage
            errors={errors}
            name='phoneNumber'
            message='phone number field should has 10 symbols at least'
            render={({ message }) => <p className='error-message'>{message}</p>}
          />  
        </div>

        <div className='basic-field'>
          <input 
            placeholder='address'
            {...register('address', { required: true, minLength: 8 })}
          />
          <ErrorMessage
            errors={errors}
            name='address'
            render={({ message }) => <p className='error-message'>{message}</p>}
          />
        </div>
        <button type='submit' className='basic-button'>Submit</button>
      </form>
    </div>
  )
}

export default PageCreateUser
