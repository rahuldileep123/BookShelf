import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { addNewWantAPI } from '../services/allApi';
function AddWant({setWantResp}) {
    const [newWant,setNewWant]=useState({
        title:"",author:"",image:"",summary:""
    })
    const [show, setShow] = useState(false);
  
    const handleClose = () =>{
       setShow(false);
      setNewWant({...newWant,title:"",author:"",image:"",summary:""})
      }
    const handleShow = () => setShow(true);
const handleWantSubmit=async()=>{
   const {title,author,image}=newWant
   if(title && author && image){
    const result=await addNewWantAPI(newWant)
    if(result?.status>=200 && result?.status<300){
        alert("added succesfully")
        handleClose()
        setWantResp(newWant)
    }
   }else{
    alert("please fill the form completely")
   }
}
  return (
    <>
    <div className="conatiner mt-5">
        <h1>Add the books you want to read</h1>
        <button onClick={handleShow} className='btn btn-primary'>ADD</button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add your Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <div className='p-2'>
      <FloatingLabel
          controlId="floatingInputimage"
          label="Name of book"
          className="mb-3"
        >
          <Form.Control value={newWant.title} onChange={(e)=>setNewWant({...newWant,title:e.target.value})} type="email" placeholder="Name of book" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInputauthor"
          label="Author"
          className="mb-3"
        >
          <Form.Control value={newWant.author} onChange={(e)=>setNewWant({...newWant,author:e.target.value})} type="email" placeholder="Author" />
        </FloatingLabel>
          <FloatingLabel
          controlId="floatingInputimage"
          label="imageUrl"
          className="mb-3"
        >
          <Form.Control value={newWant.image} onChange={(e)=>setNewWant({...newWant,image:e.target.value})} type="email" placeholder="imageUrl" />
        </FloatingLabel>
      
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleWantSubmit} variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>

      {/* summary */}
    
    </>
  )
}

export default AddWant