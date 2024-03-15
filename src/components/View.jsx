import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import BookCard from './BookCard'
import { getAllBookAPI, getAllFavAPI } from '../services/allApi'

function View({addBookResponse}) {
const [allBook,setAllBook]=useState([])
const [homeDeleteResp,setHomeDeleteResp]=useState("")
const fetchAllBook=async()=>{
  const result=await getAllBookAPI()
 
  if(result?.status==200){
    setAllBook(result.data)
  }
}
useEffect(()=>{
fetchAllBook()
},[addBookResponse,homeDeleteResp])
  return (
    <Row>
      {allBook?.map((book,index)=>(
        <Col key={index} sm={12} md={6} lg={4} >
      <BookCard setHomeDeleteResp={setHomeDeleteResp} insideFav={false} shareBook={book} />
    </Col>
      ))}
    
  
    </Row>
  )
}

export default View