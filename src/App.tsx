import { useEffect, useState } from 'react'
import './App.css'
import { collection, getDocs } from "firebase/firestore"; 
import db from './Firebase'

function App() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      setPosts(snapShot.docs.map((doc) => ({...doc.data()})))
    })
  },[])


  return (
    <div>
     {posts.map((post:any) => (
      <div>
        <h1>{post.title}</h1>
        <h2>{post.text}</h2>
      </div>
     ))}
    </div>
  )
}

export default App
