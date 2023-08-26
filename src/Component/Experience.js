import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Sidebar } from './Sidebar'
import 'react-bootstrap'
import { Title } from './Title'

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
                                <Title title='Experience' subTitle='Work Experience' />

                                <Row className='my-2' style={{ backgroundColor: "" }}>
                                    <div className='timeline-parent' style={{ backgroundColor: "" }}>
                                        <Container >
                                            <Row style={{ backgroundColor: "" }}>
                                                <Col xs lg="1" style={{ backgroundColor: "" }} >
                                                    <Row>
                                                        <div className="icon-parent">
                                                            <div className='timeline-icon my-3' style={{ backgroundColor: "rgb(76, 175, 205)" }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                                                                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z">
                                                                    </path>
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
                                                <Col xs-lg="10" className='timeline-header-parent'>
                                                    <div>
                                                        <div className="timeline-header"> Freelancer Managment System - FMS <br />
                                                            <div className='timeline-sub-header'><br /></div>
                                                        </div>
                                                        <div className='timeline-detail fw-normal'>
                                                            <Container>
                                                                <Row className="justify-content-md-center">
                                                                    <Col xs={6}>
                                                                        <span className='tech-stack-title' > Frontend: </span>
                                                                        <span className='tech-stack-value' >React, Redux Toolkit</span>
                                                                    </Col>
                                                                    <Col xs={6}>
                                                                        <span className='tech-stack-title'> Backend: </span>
                                                                        <span className='tech-stack-value'>PHP</span>
                                                                    </Col>
                                                                </Row>
                                                                <Row className="">
                                                                    <Col xs={6}>
                                                                        <span className='tech-stack-title' > Database: </span>
                                                                        <span className='tech-stack-value' >SQL</span>
                                                                    </Col>
                                                                    <Col xs={6}>
                                                                        <span className='tech-stack-title'> My Responsibility: </span>
                                                                        <span className='tech-stack-value'>React, Redux</span>
                                                                    </Col>
                                                                </Row>
                                                            </Container>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
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
                                                <Col xs-lg="10" className='timeline-header-parent' >
                                                    <div>
                                                        <div className="timeline-header "> P.R.I.S.M <br />
                                                            <div className='timeline-sub-header'><br /></div>
                                                        </div>
                                                        <div className='timeline-detail fw-normal'>
                                                            <Container>
                                                                <Row className="justify-content-md-center">
                                                                    <Col xs={6}>
                                                                        <span className='tech-stack-title' > Frontend: </span>
                                                                        <span className='tech-stack-value' >Razor</span>
                                                                    </Col>
                                                                    <Col xs={6}>
                                                                        <span className='tech-stack-title'> Backend: </span>
                                                                        <span className='tech-stack-value'>.NET</span>
                                                                    </Col>
                                                                </Row>
                                                                <Row className="">
                                                                    <Col xs={6}>
                                                                        <span className='tech-stack-title' > Database: </span>
                                                                        <span className='tech-stack-value' >PostgreSQL</span>
                                                                    </Col>
                                                                    <Col xs={6}>
                                                                        <span className='tech-stack-title'> My Responsibility: </span>
                                                                        <span className='tech-stack-value'>API operations.</span>
                                                                    </Col>
                                                                </Row>
                                                            </Container>
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
                                                <Col xs-lg="10" className='timeline-header-parent' >
                                                    <div>
                                                        <div className="timeline-header "> Edtech <br />
                                                            <div className='timeline-sub-header'><br /></div>
                                                        </div>
                                                        <div className='timeline-detail fw-normal'>
                                                            <Container>
                                                                <Row className="justify-content-md-center">
                                                                    <Col xs={6}>
                                                                        <span className='tech-stack-title' > Frontend: </span>
                                                                        <span className='tech-stack-value' >React, React-Redux</span>
                                                                    </Col>
                                                                    <Col xs={6}>
                                                                        <span className='tech-stack-title'> Backend: </span>
                                                                        <span className='tech-stack-value'>.NET</span>
                                                                    </Col>
                                                                </Row>
                                                                <Row className="">
                                                                    <Col xs={6}>
                                                                        <span className='tech-stack-title' > Database: </span>
                                                                        <span className='tech-stack-value' >PostgreSQL</span>
                                                                    </Col>
                                                                    <Col xs={6}>
                                                                        <span className='tech-stack-title'> My Responsibility: </span>
                                                                        <span className='tech-stack-value'>API Operations.</span>
                                                                    </Col>
                                                                </Row>
                                                            </Container>
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
