import React from "react";
import { Card } from "react-bootstrap";

export const  DeveloperCard = () => {
  return (
    <div className="card-parent">
      <Card className="cards">
        <Card.Body>
          <Card.Text>
            <p style={{fontSize:"80px"}}>I am <br/> <br />
              a Developer
              <br /> <span className="fs-5">
                (2021 - Present)
              </span>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
