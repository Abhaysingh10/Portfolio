import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Sidebar } from './Sidebar'

export const Experience = () => {
    return (
        <Container>
            <Row>
                <Col xs lg="3" style={{ backgroundColor: "  " }}>
                    <Sidebar />
                </Col>
            </Row>
        </Container>
  )
}
