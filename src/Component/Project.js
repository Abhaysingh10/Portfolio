import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Sidebar } from './Sidebar'

export const Project = () => {
    return (
        <Container>
            <Row>
                <Col xs lg="3" style={{ backgroundColor: "  " }}>
                    <Sidebar />
                </Col>
                <Col className="item-b " id='item-b' style={{ backgroundColor: "red" }}>
                </Col>
            </Row>
        </Container>
    )
}
