import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap';
import './style/ProjectsSection.css'

function ProjectsSection({translation}) {
  return (
    <Row className='border text-center align-items-center test project-section-container' style={{height: '80vh', width: '100%'}}>
      <Col className='d-flex'>
          <div className='align-items-center mx-auto'>
          <Card className='card'>
              <Card.Img variant="top" src="./images/vite.svg" className='card-img' />
              <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
          </div>
      </Col>
      <Col className='d-flex'>
          <div className='align-items-center mx-auto'>
          <Card className='card card-skills'>
              <Card.Img variant="top" src="./images/vite.svg" className='card-img' />
              <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
          </div>
      </Col>
      <Col className='d-flex'>
          <div className='align-items-center mx-auto'>
          <Card className='card'>
              <Card.Img variant="top" src="./images/vite.svg" className='card-img' />
              <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
          </div>
      </Col>
      <Col className='d-flex'>
          <div className='align-items-center mx-auto'>
          <Card className='card'>
              <Card.Img variant="top" src="./images/vite.svg" className='card-img' />
              <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
          </div>
      </Col>
  </Row>
  )
}

export default ProjectsSection