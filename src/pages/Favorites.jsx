import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import BookCard from '../components/BookCard'
import { getAllFavAPI } from '../services/allApi'

function Favorites() {
  const [favList,setFavList]=useState([])
  const [deleteResp,setDeleteResp]=useState("")
  const fetchFav=async()=>{
    const result=await getAllFavAPI()
    if(result?.status==200){
      setFavList(result.data)
    }
  }
  useEffect(()=>{
    fetchFav()
  },[deleteResp])

  return (
    <>
    <div className="container mt-3">
      <h1 className='text-center'>Your Favourites</h1>
      <figure className="text-center bg-warning rounded">
  <blockquote className="blockquote">
    <p class="mb-0">"The person who deserves most pity is a lonesome one on a rainy day who doesn't know how to read."</p>
  
  </blockquote>
  <figcaption className="blockquote-footer">
  Benjamin Franklin<cite title="Source Title"></cite>
  </figcaption>
</figure>
    <Row>
      {favList?.map((item,index)=>
        (<Col key={index} sm={12} md={6} lg={4} >
        <BookCard insideFav={true} shareBook={item} setDeleteResp={setDeleteResp}/>
      </Col>)
      )}
    
   
    
    </Row>
    </div>
    </>
  )
}

export default Favorites