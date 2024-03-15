import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { addNewBookAPI, deleteWantAPI } from '../services/allApi';
function WantCard({displayBook,setWantResp}) {
    const [show, setShow] = useState(false);
   const [toShelf,setToShelf]=useState({title:displayBook.title,author:displayBook.author,image:displayBook.image,summary:""})
    const handleClose = () =>{
       setShow(false);
      setToShelf({...toShelf,summary:""})
      }
    const handleShow = () => setShow(true);
const moveToShelf=async()=>{
    // setToShelf({title:displayBook.title,author:displayBook.author,image:displayBook.image})
    const result =await addNewBookAPI(toShelf)
    const {summary}=toShelf
    if(summary){
        if(result?.status>=200 && result?.status<300){
            handleClose()
           alert("your book added to shelf..keep Reading..")
           await deleteWantAPI(displayBook.id)
           setWantResp(toShelf)
        }
    }else{
        alert("please add summary")
    }
   
    
}
  return (
    <>
 <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:"250px"}} variant="top" src={displayBook?.image} />
      <Card.Body className='text-center'>
        <Card.Title>{displayBook?.title}</Card.Title>
        <Card.Text>
              <button onClick={handleShow} className='btn btn-success'>Add to Shelf</button>
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Share your summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <div className='p-2'>
      
        <FloatingLabel  controlId="floatingTextarea2" label="Summary">
        <Form.Control
          value={toShelf.summary} onChange={(e)=>setToShelf({...toShelf,summary:e.target.value})}
          as="textarea"
          placeholder="Summary"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={moveToShelf}  variant="primary">Add to Shelf</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default WantCard