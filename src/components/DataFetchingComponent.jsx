import React from "react";
import Data from "../Data/Data";
import { Card, Row, Col, Container } from "react-bootstrap";

const DataFetchingComponent = () => {
  return (
    <Container style={{marginTop:"10px"}}> 
      <Row style={{display:"flex", rowGap:"20px"}}>
        {Data.map((data, index) => (
          <Col key={index} xs={12} md={4} lg={3} >
            <Card style={{height:"250px", overflowY:"scroll"}}>
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

  );
}

export default DataFetchingComponent