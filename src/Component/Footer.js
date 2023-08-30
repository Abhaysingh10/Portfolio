import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    const [isUpArrow, setIsUpArrow] = useState(true);
    const [animationClass, setAnimationClass] = useState('');

    const toggleArrow = () => {
        setIsUpArrow((prevState) => !prevState);
    }

    useEffect(() => {
        if (!isUpArrow) {
            setAnimationClass('')
        } else {
            setAnimationClass('animate-arrow');
        }
    }, [isUpArrow])


    return (
        <div className='footer' >
            <div className='footer-child' ><i class="bi bi-telephone"></i>
                <FontAwesomeIcon className={`arrow-button ${animationClass}`} icon={faCircleArrowUp} size='2xl' onClick={toggleArrow} />
            </div>
        </div>
    )
}

export default Footer