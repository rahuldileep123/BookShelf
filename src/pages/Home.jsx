import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'

function Home() {
  const [addBookResponse,setAddBookResponse]=useState("")
  return (
    <>
    <div className="container">
        <img width={"100%"} height={"350px"} src="https://assets-global.website-files.com/5f6cc9cd16d59d990c8fca33/652814e495b00c2548126dee_books-and-reading-quotes-inspiring-1.jpg" alt="" />
    </div>
    <Add setAddBookResponse={setAddBookResponse}/>
    <div className="container">
      <View addBookResponse={addBookResponse}/>
    </div>
    </>
  )
}

export default Home