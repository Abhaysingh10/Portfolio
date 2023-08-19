import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Sidebar } from './Sidebar'
import 'react-bootstrap'

export const Experience = () => {

    document.title = 'Experience'

    console.log("hello world");

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
                                    <div className='skills-page-title p-1'>
                                        <span className='text-uppercase'> Experience  <img src='' alt='' /> </span><br /> <br /> <br />
                                        <span className='text-uppercase skills-sub-title'>Work Experience</span>
                                    </div>
                                </Row>
                                <Row className='my-2' style={{ backgroundColor: "" }}>
                                    <div className='timeline-parent' style={{ backgroundColor: "" }}>
                                        <Container >
                                            <Row style={{ backgroundColor: "" }}>
                                                <Col xs lg="1" style={{ backgroundColor: "" }} >
                                                    <Row>
                                                        <div className="icon-parent">
                                                            <div className='timeline-icon my-3' style={{ backgroundColor: "rgb(76, 175, 205)" }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                                                                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                    <Row style={{ backgroundColor: "" }}>
                                                        <div className="icon-parent">
                                                            <div className='timeline-middle-line'></div>
                                                        </div>
                                                    </Row>
                                                </Col>
                                                <Col xs-lg="10" className='timeline-header-parent' style={{ backgroundColor: "#f2f3f7" }}>
                                                    <div>
                                                        <div className="timeline-header " > Freelancer Managment System - FMS <br />
                                                            <div className='timeline-sub-header'><br /></div>
                                                        </div>
                                                        <div className='timeline-detail fw-normal'>
                                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eius beatae, doloremque delectus
                                                            optio veniam mollitia aliquam itaque dicta a. Dignissimos ad voluptatem nesciunt aliquam deleniti incidunt
                                                            et facere veniam.
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            {/* <Row style={{ backgroundColor: "" }}>
                                                <Col xs lg="2" style={{ backgroundColor: "" }}> <div className='timeline-middle-line'></div></Col>
                                                <Col style={{ backgroundColor: "" }}> Col 4</Col>
                                            </Row> */}
                                        </Container>
                                    </div>
                                    <div className='timeline-parent' style={{ backgroundColor: "" }}>
                                        <Container >
                                            <Row style={{ backgroundColor: "" }}>
                                                <Col xs lg="1" style={{ backgroundColor: "" }} >
                                                    <Row>
                                                        <div className="icon-parent">
                                                            <div className='timeline-icon my-3' style={{ backgroundColor: "rgb(227, 174, 73)" }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                                                                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                    <Row>
                                                        <div className="icon-parent">
                                                            <div className='timeline-middle-line'></div>
                                                        </div>
                                                    </Row>
                                                </Col>
                                                <Col xs-lg="10" className='timeline-header-parent' style={{ backgroundColor: "#f2f3f7" }}>
                                                    <div>
                                                        <div className="timeline-header "> P.R.I.S.M <br />
                                                            <div className='timeline-sub-header'><br /></div>
                                                        </div>
                                                        <div className='timeline-detail fw-normal'>
                                                            <i class="bi bi-arrow-left-circle"></i>

                                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eius beatae, doloremque delectus
                                                            optio veniam mollitia aliquam itaque dicta a. Dignissimos ad voluptatem nesciunt aliquam deleniti incidunt
                                                            et facere veniam.
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            {/* <Row style={{ backgroundColor: "" }}>
                                                <Col xs lg="2" style={{ backgroundColor: "" }}> <div className='timeline-middle-line'></div></Col>
                                                <Col style={{ backgroundColor: "" }}> Col 4</Col>
                                            </Row> */}
                                        </Container>
                                    </div>
                                    <div className='timeline-parent' style={{ backgroundColor: "" }}>
                                        <Container >
                                            <Row style={{ backgroundColor: "" }}>
                                                <Col xs lg="1" style={{ backgroundColor: "" }} >
                                                    <Row>
                                                        <div className="icon-parent">
                                                            <div className='timeline-icon my-3' style={{ backgroundColor: "rgba(227, 73, 73, 0.78)" }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                                                                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                    <Row>
                                                        <div className="icon-parent">
                                                            {/* <div className='timeline-middle-line'></div> */}
                                                        </div>
                                                    </Row>
                                                </Col>
                                                <Col xs-lg="10" className='timeline-header-parent' style={{ backgroundColor: "#f2f3f7" }}>
                                                    <div>
                                                        <div className="timeline-header "> Edtech <br />
                                                            <div className='timeline-sub-header'><br /></div>
                                                        </div>
                                                        <div className='timeline-detail fw-normal'>
                                                            <i class="bi bi-arrow-left-circle"></i>

                                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eius beatae, doloremque delectus
                                                            optio veniam mollitia aliquam itaque dicta a. Dignissimos ad voluptatem nesciunt aliquam deleniti incidunt
                                                            et facere veniam.
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            {/* <Row style={{ backgroundColor: "" }}>
                                                <Col xs lg="2" style={{ backgroundColor: "" }}> <div className='timeline-middle-line'></div></Col>
                                                <Col style={{ backgroundColor: "" }}> Col 4</Col>
                                            </Row> */}
                                        </Container>
                                    </div>
                                </Row>



                            </div>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
