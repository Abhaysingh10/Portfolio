import React from 'react'

export const AppLayout = () => {
  return (
    <Container>
    <Row>
      <Col xs lg="3" style={{backgroundColor:"  "}}>
        <Sidebar />
      </Col>
      <Col className="item-b " style={{ backgroundColor: "  " }}>
        <div className="home-body">
          <DeveloperCard />
          <a href="#" className=" my-2 nav-link active text-black fs-6" onClick={transition}>
            {/* <svg className="bi me-2" width="16" height="16"></svg> */}
            {/* Transition */}
          </a>
          <LifeSizeCardboard />
        
        </div>
      </Col>
      {/* <Col>
      </Col> */}
    </Row>
  </Container>
  )
}
