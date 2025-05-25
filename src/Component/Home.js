import React from "react";
import { Sidebar } from "./Sidebar";
import { Col, Row, Container } from "react-bootstrap";
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
      <Col className="col-6 col-sm-4 col-md-3 col-lg-3" style={{backgroundColor:"  "}}>
        <Sidebar />
      </Col>
      <Col className="item-b " style={{ backgroundColor: "  " }}>
        <div className="">
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
