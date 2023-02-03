import './App.css';
import { useState,useEffect } from 'react'

function App() {
  const [content,setContent]=useState('Hii');
  const [text,setText]=useState("hello");

  useEffect(()=>{
     console.log(content) 
     console.log(text)
  },[])
  return (
   <>
   <button onClick={()=>{setContent('Posts')}}>Posts</button>
   <button onClick={()=>{setContent('Comments')}}>Comments</button>
   <button onClick={()=>{setContent('Images')}}>Images</button>
   <button onClick={()=>{setText("good morning!!")}}>Text button</button>
   </>
  );
}

export default App;