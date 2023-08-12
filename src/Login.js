import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {useDispatch} from 'react-redux'
import {loginActions} from './loginActions'
import { Controller, useForm } from 'react-hook-form'

function Login() {
  const dispatch=useDispatch()
  const {
    handleSubmit,
    control,
    formState: {errors}
  }=useForm()

  const onSubmit=data => {
    dispatch(loginActions(data))
  }

  return (
    
    <div className='glass login-parent-div'>

      <div className='login-form'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>

            <Controller
              name='email'
              rules={{required: true}}
              control={control}
              render={({field: {onChange,onBlur,value}}) => (
                <Form.Control
                  name='email'
                  {...value}
                  type='email'
                  placeholder='Enter email'
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
            {errors.email&&<p style={{color: 'red'}}>Email is required.</p>}

            <Form.Text className='text-muted'>

            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Controller
              control={control}
              name='password'
              rules={{required: true}}
              render={({field: {onChange,onBlur,value}}) => (
                <Form.Control
                  name='password'
                  {...value}
                  type='password'
                  placeholder='Enter password'
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
            {errors.password&&(
              <p style={{color: 'red'}}>Password is required.</p>
            )}
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            {/* <Form.Check type='checkbox' label='Check me out' /> */}
          </Form.Group>
          <div className='login-submit-button'>
            <Button className='' type='submit'>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login
