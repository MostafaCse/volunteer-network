import React from 'react';
import { Button, Container, Form, FormControl, Row } from "react-bootstrap";


const Home = () => {
//  const [allEvents, setAllEvents] = useState([]);

  return (
    <Container className="text-center my-5">
      <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
      <br />
      <div className="w-25 m-auto">
        <Form inline>
          <FormControl type="text" placeholder="Search" />
          <Button variant="primary">Search</Button>
        </Form>
      </div>

      <Row className="mt-5">
    
     
      </Row>
    </Container>
  );
};

export default Home;
