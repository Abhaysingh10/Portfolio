import React from 'react'
import { Row } from 'react-bootstrap'
import 'animate.css'

export const Title = ({title, subTitle}) => {
    return (
        <Row className='skills-page-title-parent animate__animated animate__bounceInRight'>
            <div className='skills-page-title'>
                <span className='text-uppercase'> {title}  <img src='' alt='' /> </span><br /> <br /> <br />
                <span className='text-uppercase skills-sub-title'>{subTitle}</span>
            </div>
        </Row>
    )
}
