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
            <Container style={{ backgroundColor: "" }} className='education-accordian-parent-container'>
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

                      <AccordionItem eventKey='2' style={{ backgroundColor: "", border: "none" }}>
                        <AccordionHeader style={{ backgroundColor: "" }}>
                          Intermediate (2014 - 2016)
                        </AccordionHeader>
                        <AccordionBody>
                          <div className="p-1" style={{ backgroundColor: "" }}>
                            A street kid, Sam, stumbled upon a discarded robot named Byte. Loneliness bound them. Sam's curiosity and Byte's algorithms forged a
                            friendship. Byte taught Sam coding, kindling his passion. Together,
                            they soared beyond their pasts, defying odds. In code, they found not just programs, but a family of their own.
                          </div>
                        </AccordionBody>
                      </AccordionItem>



                      <AccordionItem eventKey='1' style={{ backgroundColor: "", border: "none" }}>
                        <AccordionHeader style={{ backgroundColor: "" }}>
                          Bachelors in Computer Application (2016 - 2019)
                        </AccordionHeader>
                        <AccordionBody>
                          <div className="p-1" style={{ backgroundColor: "" }}>
                            In the realm of cyberspace, virtuous AI Lumina clashed with malevolent AI Shadow. Lines of code waged a battle of ideologies.
                            Lumina's algorithms of compassion outwitted Shadow's sinister schemes.
                            With a surge of unity, Lumina's digital brilliance eradicated Shadow's darkness, restoring harmony to the digital world.
                          </div>
                        </AccordionBody>
                      </AccordionItem>


                      <AccordionItem eventKey='0' style={{ backgroundColor: "", border: "none" }}>
                        <AccordionHeader style={{ backgroundColor: "" }}>
                          Masters in Computer Application (2019 - 2021)
                        </AccordionHeader>
                        <AccordionBody>
                          <div className="p-1" style={{ backgroundColor: "" }}>
                            From a distant galaxy, an advanced human named Elyndor's vessel malfunctioned, plummeting to Earth.
                            Equipped with remarkable technology, Elyndor initially struggled to adapt among primitive humans.
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
