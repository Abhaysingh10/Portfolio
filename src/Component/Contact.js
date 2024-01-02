import React from 'react'
import { Sidebar } from './Sidebar'
import { Button, Col, Container, Row } from 'react-bootstrap'
import WavingHand from './../Assest/Image/waving-hand.png'
import { Controller, useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import 'react-toastify/dist/ReactToastify.css';
import  {ToastContainer, toast}  from 'react-toastify'

export const Contact = () => {

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    document.title = 'Contact'

    const onSubmit = (value) => { 
   
        console.log(value)
        emailjs.send('service_6bpmfh8','template_gde2k1r', value, 'H5XIUE5fTo4kOem70', {name:value.name}).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            toast.success('Mail sent !')
    reset({name:"", message:"", interest:"", email:"",budget:"" })
         }, (err) => {
            console.log('FAILED...', err);
         });
      }
    return (

        <Container>
            <ToastContainer/>
            <Row>
                <Col xs lg="3" style={{ backgroundColor: "  " }}>
                    <Sidebar />
                </Col>
                <Col className="item-b " id='item-b' style={{ backgroundColor: "" }}>
                    <div className="home-body">
                        <Container style={{ backgroundColor: "" }}>
                            <div className='' style={{}}>
                                <Row className='contact-page-title-parent animate__animated animate__bounceInRight'>
                                    <div className='contact-page-title'>
                                        <span>Love to hear from you, <img src={WavingHand} alt='' /> </span><br />
                                        <span>Get in touch</span>
                                    </div>
                                </Row>
                                <Row className='contact-form '>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        
                                    <div style={{ justifyContent: "center", padding: "20px" }}>
                                        <Container>
                                            <Row style={{ backgroundColor: "" }} className='show-up-animation'>
                                                <Col className='contact-input-title'>Your name <span className='mandatory-sign'> * </span> </Col>
                                                <Col className='contact-input-title'>Your email <span className='mandatory-sign'> * </span> </Col>
                                            </Row>
                                            <Row style={{ backgroundColor: "" }} className='show-up-animation'>
                                                <Col className='my-1'>
                                                    <Controller
                                                        name='name'
                                                        control={control}
                                                        rules={{ required: true }}
                                                        render={({ field: { onChange, onBlur, value } }) => (
                                                            <input
                                                                className='contact-input'
                                                                type="text"
                                                                placeholder=''
                                                                onChange={onChange}
                                                                value={value}
                                                                onBlur={onBlur} />
                                                        )}
                                                    />
                                                     {/* {true && <span className='error-message'>This is required.</span>} */}
                                                     {errors.name && <span className='error-message'>This is required.</span>}
                                                </Col>

                                                <Col className='my-1'>
                                                    <Controller
                                                        name='email'
                                                        control={control}
                                                        rules={{ required: true }}
                                                        render={({ field: { onChange, onBlur, value } }) => (
                                                            <input
                                                                className='contact-input'
                                                                type="text"
                                                                placeholder=''
                                                                onChange={onChange}
                                                                value={value}
                                                                onBlur={onBlur} />
                                                        )}
                                                    />
                                                     {errors.email && <span className='error-message'>This is required.</span>}

                                                </Col>
                                            </Row>
                                            <Row className='show-up-animation' style={{ backgroundColor: "", marginTop: "" }} >
                                                <Col className='my-1 contact-input-title'>What are you interseted in? <span className='mandatory-sign'> * </span> </Col>
                                                <Col className='my-1 contact-input-title'>Project Budget <span className='mandatory-sign'> * </span> </Col>
                                            </Row>
                                            <Row style={{ backgroundColor: "" }}>
                                                <Col className='my-1'>
                                                <Controller
                                                        name='interest'
                                                        control={control}
                                                        rules={{ required: true }}
                                                        render={({ field: { onChange, onBlur, value } }) => (
                                                            <input
                                                                className='contact-input'
                                                                type="text"
                                                                placeholder=''
                                                                onChange={onChange}
                                                                value={value}
                                                                onBlur={onBlur} />
                                                        )}
                                                    />
                                                     {errors.interest && <span className='error-message'>This is required.</span>}

                                                </Col>
                                                <Col className='my-1'>
                                                <Controller
                                                        name='budget'
                                                        control={control}
                                                        rules={{ required: true }}
                                                        render={({ field: { onChange, onBlur, value } }) => (
                                                            <input
                                                                className='contact-input'
                                                                type="text"
                                                                placeholder=''
                                                                onChange={onChange}
                                                                value={value}
                                                                onBlur={onBlur} />
                                                        )}
                                                    />
                                                     {errors.budget && <span className='error-message'>This is required.</span>}

                                                </Col>
                                            </Row>
                                            <Row className='mt-1'>
                                                <Col className='contact-input-title'>Message</Col>
                                            </Row>
                                            <Row className=''>
                                                <Col className='my-1' style={{ backgroundColor: "", }}>
                                                <Controller
                                                        name='message'
                                                        control={control}
                                                        render={({ field: { onChange, onBlur, value } }) => (
                                                            <textarea
                                                                className='contact-input'
                                                                // type="text"
                                                                placeholder=''
                                                                onChange={onChange}
                                                                value={value}
                                                                onBlur={onBlur} />
                                                        )}
                                                    />
                                                    </Col>
                                            </Row>
                                            <Row className='mt-3'>
                                                <Col className='contact-input-title'>
                                                    <div className='login-submit-button'>
                                                        <Button className='' type='submit' style={{ color: "#000" }}>
                                                            Submit
                                                        </Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                    </form>
                                </Row>
                            </div>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
