
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmarks = (bookmark)=> {
      const newBookmark = [...bookmarks, bookmark];
      setBookmarks(newBookmark);
  }
 
  return (
    <>
      <Header></Header>
      <div className='md:flex '>
          <Blogs handleBookmarks={handleBookmarks}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
