import './App.css';
import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form>
          <Row>
            <Col md>
              <Form.Group controlId= "formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Example@email.com"/>
                <Form.Text classname="text-muted">
                We'll never share your email address, trust us!
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md> 
              <Form.Group controlId= "formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password"/>
              </Form.Group>
            </Col>
          </Row>
          <Button class="secondary" type="submit">Login</Button>
        </Form>
        <Card className= "mb-3"style={{color: "#000"}}>
          <Card.Img src="https://images.unsplash.com/photo-1682687221006-b7fd60cf9dd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"/>
          <Card.Body>
            <Card.Title>Example</Card.Title>
            <Card.Text>This is an example</Card.Text>
            <Button variant="primary">Boom</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test 2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">This is a button</Alert>
        <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
