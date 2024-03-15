import React from 'react'
import './landing.css'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
    <div className="container-fluid welcome ">
        <h1 style={{color:"white",fontWeight:"bolder",fontSize:"50px"}}><span style={{fontSize:"20px"}}>Welcome to</span> BOOKSHELF.</h1>
 <p style={{textAlign:"center",color:"white",fontWeight:"bold"}}>"Your Personal Bookshelf! Organize, track, and share the books you've read with ease. Start building your virtual library today and embark on a journey of literary exploration. Happy reading!"</p>
<Link to={"/home"}> <button  style={{color:"black"}} className='btn btn-warning'>Open Your Shelf</button></Link>
    </div>
    <div className="container mt-3">
      <h1 className='text-center'>BOOK SUGGESTIONS</h1>
      <div className="row">
        <div className="col-lg-3">
        <Card className='shadow '  style={{ width: '16rem' }}>
      <Card.Img style={{width:"100%",height:"200px"}} variant="top" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQwIkfr6dkffSWOTFhD6nnP0o9CnDaOxfjo4wyZa7dzhSvSz2hC" />
      <Card.Body className='text-center'>
        <Card.Title>Cosmos</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary" >Buy Now</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-3">
        <Card className='shadow '  style={{ width: '16rem' }}>
      <Card.Img style={{width:"100%",height:"200px"}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vFcAXvgscBosHvFY-lKVSA9XIXXarDVcm3vyQox3YJSCONfI" />
      <Card.Body className='text-center'>
        <Card.Title>Silent Spring</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary" >Buy Now</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-3">
        <Card className='shadow '  style={{ width: '16rem' }}>
      <Card.Img style={{width:"100%",height:"200px"}} variant="top" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPKlQbYym2c7Ja59ztwDCkV7wGBOeNi-71zGf-IK-4lWv205wB" />
      <Card.Body className='text-center'>
        <Card.Title>Dune</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary" >Buy Now</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-3">
        <Card className='shadow '  style={{ width: '16rem' }}>
      <Card.Img style={{width:"100%",height:"200px"}} variant="top" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTq14klsoU9s5x_KzwFNAF-Qhu5Pm6Bw6KTbb3kF5lrmtG0hYi6" />
      <Card.Body className='text-center'>
        <Card.Title>Children of Time</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary" >Buy Now</Button>
      </Card.Body>
    </Card>
        </div>
      </div>
      {/* <Row>
        <Col sm={12} md={6} lg={3}>
    
        </Col>
        <Col sm={12} md={6} lg={3}>
     
        </Col>
        <Col sm={12} md={6} lg={3}>
  
        </Col>
        <Col sm={12} md={6} lg={3}>
    
        </Col>
      </Row> */}
    </div>
    <div className="d-flex justify-content-between align-items-center mt-4">
<div className='p-3'>
      <figure>
    <blockquote className="blockquote">
      <p class="mb-0">"A reader lives a thousand lives before he dies. The man who never reads lives only one."</p>
    
    </blockquote>
    <figcaption class="blockquote-footer">
    George R.R. Martin<cite title="Source Title"></cite>
    </figcaption>
  </figure>
</div>

<div className='p-3'>
  <figure class="text-center">
    <blockquote class="blockquote">
      <p class="mb-0">"Reading is to the mind what exercise is to the body."</p>
    
    </blockquote>
    <figcaption class="blockquote-footer">
    Joseph Addison<cite title="Source Title"></cite>
    </figcaption>
  </figure>
</div>
<div className='p-3'>
  <figure class="text-end">
    <blockquote class="blockquote">
      <p class="mb-0">"The more that you read, the more things you will know. The more that you learn, the more places you'll go."</p>
    
    </blockquote>
    <figcaption class="blockquote-footer">
    Dr. Seuss <cite title="Source Title"></cite>
    </figcaption>
  </figure>
</div>

    </div>
    </>
  )
}

export default LandingPage