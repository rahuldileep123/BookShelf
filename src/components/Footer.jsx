import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div style={{height:'300px',color:'white'}} className=' w-100 bg-primary p-5'>
    <div className="footer-content d-flex justify-content-between">
       <div style={{width:'400px'}} className="media d-flex justify-content-center align-items-center">
         <h5 style={{fontSize:"55px"}}>BOOKSHELF.</h5>
      
       </div>
       <div className="links d-flex flex-column">
           <h5>Links</h5>
           <Link to='/' style={{textDecoration:'none', color:'white'}} >Home</Link>
           <Link to='/favourites' style={{textDecoration:'none', color:'white'}} >Favourites</Link>
           <Link to='/wanttoread' style={{textDecoration:'none', color:'white'}} >Want to Read</Link>
       </div>
      
       <div className="contact">
           <h5>Contact Us</h5>
           <div className="d-flex">
               <input type="text" className="form-control" />
               <button className='btn btn-info ms-1'><i className="fa-solid fa-arrow-right"></i></button>
           </div>
           <div className="icons d-flex justify-content-between mt-3">
               <a style={{textDecoration:'none', color:'white'}} href="https://twitter.com/?lang=en" target='_blank'><i className="fa-brands fa-x-twitter"></i></a>
               <a style={{textDecoration:'none', color:'white'}} href="https://www.instagram.com/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
               <a style={{textDecoration:'none', color:'white'}} href="https://www.facebook.com/" target='_blank'><i className="fa-brands fa-facebook"></i></a>
               <a style={{textDecoration:'none', color:'white'}} href="https://github.com/" target='_blank'><i className="fa-brands fa-github"></i></a>
               <a style={{textDecoration:'none', color:'white'}} href="" target='_blank'><i className="fa-brands fa-x-twitter"></i></a>
           </div>
          
       </div>
       
    </div>
    <p className='text-center mt-3'>copyright &copy; 2024 Ecart, Built with React</p>
       </div>
    </>
  )
}

export default Footer