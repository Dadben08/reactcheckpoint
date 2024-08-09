import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Name from './component/Name';
import Price from './component/price';
import Description from './component/Description';
import Image from './component/Image';
import product from './product';

const firstName = 'Dada'; // Replace with your actual first name

function App() {
  return (
    <Container className="mt-5">
      <Card className="product-card">
        <Card.Body>
          <Row>
            <Col md={4}>
              <Image />
            </Col>
            <Col md={8}>
              <Name />
              <Price />
              <Description />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <div className="mt-3">
        {firstName ? (
          <p>Hello, {firstName}!</p>
        ) : (
          <p>Hello, there!</p>
        )}
        {firstName && <img src="https://www.istore.com.ng/cdn/shop/files/Apple_Watch_Ultra_2_LTE_49mm_Titanium_Green_Gray_Trail_Loop_PDP_Image_Position-1__WWEN_300x.jpg?v=1696637438/150" alt="Placeholder" />}
      </div>
    </Container>
  );
}

export default App;
