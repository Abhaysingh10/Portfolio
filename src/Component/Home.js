import React from "react";
import { Sidebar } from "./Sidebar";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { DeveloperCard } from "../Cards/DeveloperCard";
import { LifeSizeCardboard } from "./LifeSizeCardboard";

export const Home = () => {
  React.useEffect(() => {
    return () => { };
  }, []);

  const transition = () => { };

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
  </>    
  );
};
