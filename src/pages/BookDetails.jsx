import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleBookAPI } from '../services/allApi'
import "./book.css"
function BookDetails() {
  const [singleBook,setSingleBook]=useState([])
  const {id}=useParams()
console.log(id);
const viewBook=async(bId)=>{
const result =await getSingleBookAPI(bId)
console.log(result);
if(result?.status==200){
  setSingleBook(result.data)
  
}
}
useEffect(()=>{
  viewBook(id)
},[])

  return (
    <>
    <div style={{width:"100%",height:"100vh"}} className="d-flex justify-content-center align-items-center bg-secondary">
      <div style={{width:"500px"}} className="bookBox shadow">
        <h1>{singleBook?.title}</h1>
              <img style={{width:"200px",height:"250px"}} src={singleBook?.image} alt="" />
           <h3><span>Author: </span>{singleBook?.author}</h3>
           <p>{singleBook?.summary}</p>
      </div>
    </div>
    </>
  )
}

export default BookDetails