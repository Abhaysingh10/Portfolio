import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { Sidebar } from './Sidebar'
import AccordionItem from 'react-bootstrap/esm/AccordionItem'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'

export const Education = () => {

  document.title = 'Education'


  return (
    <Container>
      <Row>
        <Col xs lg="3" style={{ backgroundColor: "  " }}>
          <Sidebar />
        </Col>
        <Col className="item-b " id='item-b' style={{ backgroundColor: "" }}>
          <div className="home-body">
            <Container style={{ backgroundColor: "" }}>
              <div className='' style={{}}>
                <Row className='skills-page-title-parent'>
                  <div className='skills-page-title p-4'>
                    <span className='text-uppercase'> Education  <img src='' alt='' /> </span><br /> <br /> <br />
                    <span className='text-uppercase skills-sub-title'>my education</span>
                  </div>
                </Row>
                <Row className='' style={{ backgroundColor: "" }}>
       

                  <Col style={{ backgroundColor: "" }}>
                    <Accordion>
                      <AccordionItem eventKey='0'>
                        <AccordionHeader>
                          Masters in Comouter Application
                        </AccordionHeader>
                        <AccordionBody>
                          <div className=" p-4" style={{ backgroundColor: "" }}>
                            From a distant galaxy, an advanced human named Elyndor's vessel malfunctioned, plummeting to Earth.
                            Equipped with remarkable technology, Elyndor initially struggled to adapt among primitive humans.
                         
                          </div>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem eventKey='1'>
                        <AccordionHeader>
                          Bachelor in Comoputer Application
                        </AccordionHeader>
                        <AccordionBody>
                          <div className="skill-story p-4" style={{ backgroundColor: "" }}>
                            From a distant galaxy, an advanced human named Elyndor's vessel malfunctioned, plummeting to Earth.
                            Equipped with remarkable technology, Elyndor initially struggled to adapt among primitive humans.
                            Yet, their compassion and curiosity endeared them to Earth's inhabitants.
                            Gradually, Elyndor shared knowledge, sparking a technological revolution.
                            As their ship's repairs progressed, they faced a choice: return home or stay with newfound friends.
                            Recognizing Earth's potential, Elyndor chose to remain, becoming a bridge between two worlds, united by shared dreams of progress
                            and understanding.
                          </div>
                        </AccordionBody>
                      </AccordionItem>
                    </Accordion>
                  </Col>

                </Row>



              </div>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
