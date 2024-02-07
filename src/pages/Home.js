// src/pages/Home.js
import React from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';

function Home() {
  return (
    <Jumbotron>
      <Container>
        <h1>Welcome to Lifestyle Web</h1>
        <p>This is a lifestyle website showcasing various topics.</p>
        <Button variant="primary" href="/about">Learn more</Button>
      </Container>
    </Jumbotron>
  );
}

export default Home;
