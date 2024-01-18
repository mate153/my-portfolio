import React from 'react'
import { Container, Form, FormGroup, FormLabel, FormControl, Button, Row, Col } from 'react-bootstrap';
import './style/ContactSection.css'

function ContactSection({translation}) {
  return (    
    <Row>
      <Col className='text-center p-5' lg={8}>
        <span className='form-title'>{translation("get-in-touch")}</span>
        <Container className="form-container text-start p-4" bg="dark" data-bs-theme="dark">
          <Form className="form">
            <FormGroup className="form-group">
              <FormLabel htmlFor="text" className="form-label mx-1">{translation("name")}</FormLabel>
              <FormControl required name="name" id="name" type="text" className="form-input" />
            </FormGroup>
            <FormGroup className="form-group">
              <FormLabel htmlFor="email" className="form-label mx-1">Email</FormLabel>
              <FormControl required name="email" id="email" type="text" className="form-input" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="textarea" className="form-label mx-1">{translation("your-message")}</FormLabel>
              <FormControl as="textarea" required cols="50" rows="10" id="textarea" name="textarea" className="form-textarea" />
            </FormGroup>
            <Button type="submit" className="form-submit-btn">{translation("submit")}</Button>
          </Form>
        </Container>
      </Col>
      <Col lg={4}>
        {/* Icons */}
      </Col>
    </Row>  
  )
}

export default ContactSection