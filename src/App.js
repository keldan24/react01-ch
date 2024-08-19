import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Name from './components/name';
import Price from './components/price';
import Description from './components/description';
import Image from './components/image';
import './App.css'

function App() {
  const firstName = "John";
  const greeting = firstName ? `Hello, ${firstName}!` : "Hello, there!";

  return (
    <Container className="my-4 App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Product Information</Card.Title>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <p className="mt-3">{greeting}</p>
      {firstName && <img src="/logo192.png" alt="Your Image" />}
    </Container>
  );
}

export default App;
