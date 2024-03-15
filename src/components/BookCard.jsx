import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { addFavoriteAPI, deleteBookShelfAPI, deleteFavAPI, getAllFavAPI } from '../services/allApi'
import { Link } from 'react-router-dom'

function BookCard({insideFav,shareBook,setDeleteResp,setHomeDeleteResp}) {
  const [inFav,setInFav]=useState(false)
  const addFav=async()=>{
    const result= await addFavoriteAPI(shareBook)
    if(result?.status>=200 && result?.status<300){
      alert(`${shareBook.title} added to favourites`)
      setInFav(true)
    }
  }
  const handleHeart=async()=>{
    const fav= await getAllFavAPI()
    const itemInFav = fav.data.find(item=>item.id==shareBook.id)
     if(itemInFav){
      setInFav(true)
     }
  }
useEffect(()=>{
  handleHeart()
})

const deleteBook=async(bookId)=>{
    await deleteBookShelfAPI(bookId)
    setHomeDeleteResp(shareBook.id)
}
const deleteFav=async(bookId)=>{
  await deleteFavAPI(bookId)
  setDeleteResp(shareBook.id)
}
  return (
    <>
      <Card style={{ width: '18rem' }} className='mb-3 shadow'>
      <Card.Img style={{height:"280px"}} variant="top" src={shareBook.image} />
      <Card.Body className='text-center'>
        <Card.Title>{shareBook.title}
</Card.Title>
        <Card.Text>
   
        </Card.Text>
       <div className='d-flex justify-content-between align-items-center text-center'>
        
       
      
      
       {!insideFav && <button onClick={addFav} className='btn'> <i style={{fontSize:"20px"}} className={`${inFav?"fa-solid":"fa-regular"} text-danger fa-heart`}></i></button>}
            <Link to={`/bookdetails/${shareBook.id}`}><Button className='btn-dark' variant="primary">View More</Button></Link>
           {insideFav?<button onClick={()=>deleteFav(shareBook.id)} className='btn'> <i className="fa-solid fa-trash text-danger"></i></button>
           :
           <button onClick={()=>deleteBook(shareBook.id)}    className='btn'> <i className="fa-solid fa-trash text-danger"></i></button>
           }
      
      
          
       </div>
      </Card.Body>
    </Card>
    </>
  )
}

export default BookCard