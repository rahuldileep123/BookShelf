import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { Await, Link } from 'react-router-dom'
import { addNewBookAPI } from '../services/allApi';

function Add({setAddBookResponse}) {
  const [show, setShow] = useState(false);
  const handleClose = () =>{
     setShow(false);
    setNewBook({...newBook,title:"",author:"",image:"",summary:""})
    }
  const handleShow = () => setShow(true);

  //store book details to a state
  const [newBook,setNewBook]=useState({title:"",author:"",image:"",summary:""})
//add book to server
const handleSubmit=async()=>{
  const {title,author,image,summary}=newBook
  if(title && author && image && summary){
    const result= await addNewBookAPI(newBook)
    console.log(result);
    if(result.status>=200 && result.status<300){
      handleClose()
      setAddBookResponse(newBook)
    }else{
      alert("upload failed")
    }
    
  }else{
    alert("please fill the form completely")
  }
}


  return (
    <>
    <div className="container d-flex flex-column align-items-center justify-content-center mt-4 w-100">
      <h1 className='text-primary'>My BookShelf</h1>
      <div className="d-flex align-items-center justify-content-around mt-3 w-100">
        <div className="d-flex align-items-center flex-column ">
            <h3>Add new book to your shelf</h3>
            <button onClick={handleShow} className='btn btn-success'>Add</button>
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
          <Form.Control value={newBook.title} onChange={(e)=>setNewBook({...newBook,title:e.target.value})} type="email" placeholder="Name of book" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInputauthor"
          label="Author"
          className="mb-3"
        >
          <Form.Control value={newBook.author} onChange={(e)=>setNewBook({...newBook,author:e.target.value})} type="email" placeholder="Author" />
        </FloatingLabel>
          <FloatingLabel
          controlId="floatingInputimage"
          label="imageUrl"
          className="mb-3"
        >
          <Form.Control value={newBook.image} onChange={(e)=>setNewBook({...newBook,image:e.target.value})} type="email" placeholder="imageUrl" />
        </FloatingLabel>
        <FloatingLabel  controlId="floatingTextarea2" label="Summary">
        <Form.Control
        value={newBook.summary} onChange={(e)=>setNewBook({...newBook,summary:e.target.value})}
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
          <Button onClick={handleSubmit} variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
        <div className="d-flex flex-column ">
        <Link to={"/favorites"} style={{textDecoration:"none"}}>  <button className='btn btn-outline-info shadow'><i className="fa-solid fa-heart text-danger me-1 "></i>Favourite</button></Link>
          <Link to={"/wanttoread"}  style={{textDecoration:"none"}}><button className='btn btn-outline-info shadow mt-2'><i className="fa-solid fa-book me-1 "></i>Want to Read</button></Link>
        </div>
      </div>
      <hr style={{color:"red"}} />
    </div>
    </>
  )
}

export default Add