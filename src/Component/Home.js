import React from "react";
import { Sidebar } from "./Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import { DeveloperCard } from "../Cards/DeveloperCard";
import { LifeSizeCardboard } from "./LifeSizeCardboard";

export const Home = () => {
  React.useEffect(() => {

    
    return () => { };
  }, []);
  
  document.title  =  'Home'
  return (
  <>
  <Container>
    <Row>
      <Col xs lg="3" style={{backgroundColor:"  "}}>
        <Sidebar />
      </Col>
      <Col className="item-b " style={{ backgroundColor: "  " }}>
        <div className="home-body">
          <DeveloperCard />
          <LifeSizeCardboard />
        
        </div>
      </Col>
      {/* <Col>
      </Col> */}
    </Row>
  </Container>
  </>    
  );
};
