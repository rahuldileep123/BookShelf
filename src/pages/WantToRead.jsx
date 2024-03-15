import React, { useState ,useEffect} from 'react'
import AddWant from '../components/AddWant'
import WantCard from '../components/WantCard'
import { getAllWantAPI} from '../services/allApi';

function WantToRead() {
const [wantBook,setWantBook]=useState([])
const [wantResp,setWantResp]=useState("")

const fetchWant=async()=>{
  const result=await getAllWantAPI()
  if(result?.status==200){
    setWantBook(result?.data)
    console.log(wantBook);
  }
}
useEffect(() => {
 fetchWant()
}, [wantResp])


  return (
    <>
    <div className="container ">
    <AddWant  setWantResp={setWantResp}/>
 <div className='container '>
      </div>
      <div className="row mt-3 mb-5">
        {wantBook?.map((item,index)=>(
           <div key={index} className="col-lg-4">
           <WantCard  setWantResp={setWantResp} displayBook={item}/>
         </div>
        ))}
        
      </div>
 </div>
   
    </>
  )
}

export default WantToRead