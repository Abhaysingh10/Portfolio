import React from 'react'
import { Col, Container, ProgressBar, Row } from 'react-bootstrap'
import { Sidebar } from './Sidebar'

export const Skills = () => {


  const skillComponent = (skillName, percentage, className) => {

    return <Col className='skills-bar-col' style={{ backgroundColor: "" }}>{skillName}
      <div className={`${className}-div`}>
        <span>
          {percentage}
        </span>
      </div>
      <br />
      <div className='progress-wrap'>
        <ProgressBar className={`mt-2 ${className} `} role='progressbar' now={parseInt(percentage)} >
        </ProgressBar>
      </div>
    </Col>

  }

  return (
    <Container>
      <Row>
        <Col xs lg="3" style={{ backgroundColor: "" }}>
          <Sidebar />
        </Col>
        <Col className="item-b " id='item-b' style={{ backgroundColor: "" }}>
          <div className="home-body">
            <Container style={{ backgroundColor: "" }}>
              <div className='' style={{}}>
                <Row className='skills-page-title-parent'>
                  <div className='skills-page-title p-4'>
                    <span className='text-uppercase'> my speciality  <img src='' alt='' /> </span><br /> <br /> <br />
                    <span className='text-uppercase skills-sub-title'>my skills</span>
                  </div>
                </Row>

                <Row className='skill-story-parent' style={{ backgroundColor: "" }}>
                  <div className="skill-story p-4" style={{ backgroundColor: "" }}>
                    Bob, a technophobe, got a "smart" umbrella. It synced weather updates, sang in the rain.
                    One day, it glitched loudly. Embarrassed, Bob tried silencing it, but it blared, "Global dance party time!"
                    Rain-soaked strangers joined his jig. Now, Bob's umbrella's a DJ sensation. He's rainproof and famous, but still
                    technologically clueless.
                  </div>
                </Row>
                <Row className='p-3 skills-bar' style={{ backgroundColor: "" }}>
                  <Col className='skills-bar-col' style={{ backgroundColor: "" }}>React Js
                    <div className='react-div'>
                      <span>
                        90%
                      </span>
                    </div>
                    <br />
                    <div className='progress-wrap'>
                      <ProgressBar className='mt-2 react' role='progressbar' now={90} >
                      </ProgressBar>
                    </div>
                  </Col>
                  <Col className='skills-bar-col' style={{ backgroundColor: "" }}>Node
                    <div className='node-div'>
                      <span>
                        80%
                      </span>
                    </div>
                    <br />
                    <div className='progress-wrap'>
                      <ProgressBar className='mt-2 node' role='progressbar' now={80} >
                      </ProgressBar>
                    </div>
                  </Col>

                </Row>
                <Row className='p-3 skills-bar' style={{ backgroundColor: "" }}>
                  <Col className='skills-bar-col' style={{ backgroundColor: "" }}>SQL
                    <div className='sql-div'>
                      <span>
                        70%
                      </span>
                    </div>
                    <br />
                    <div className='progress-wrap'>
                      <ProgressBar className='mt-2 sql' role='progressbar' now={70} >
                      </ProgressBar>
                    </div>
                  </Col>
                  <Col className='skills-bar-col' style={{ backgroundColor: "" }}>Mongo
                    <div className='mongo-div'>
                      <span>
                        60%
                      </span>
                    </div>
                    <br />
                    <div className='progress-wrap'>
                      <ProgressBar className='mt-2 mongo' role='progressbar' now={60} >
                      </ProgressBar>
                    </div>
                  </Col>
                </Row>
                <Row className='p-3 skills-bar'>
                  {skillComponent(".NET", "50%", "net")}
                  {skillComponent("Firebase", "75%", "firebase")}
                </Row>
              </div>
            </Container>
          </div>
        </Col>
      </Row>

    </Container>
  )
}
