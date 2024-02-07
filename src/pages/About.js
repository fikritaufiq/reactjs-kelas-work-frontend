// src/pages/About.js
import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function About() {
  const todos = useSelector(state => state.todos.todos);

  return (
    <Container>
      <h1>About Us</h1>
      <p>We are passionate about lifestyle and aim to bring you the latest trends and tips.</p>
      <h2>Todo List</h2>
      <ListGroup>
        {todos.map(todo => (
          <ListGroup.Item key={todo.id}>
            {todo.title} - {todo.completed ? 'Completed' : 'Incomplete'}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default About;
