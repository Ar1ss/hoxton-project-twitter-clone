import './components/LeftNav.css'
import './components/HomePage.css'
import './components/RightMenu.css'
import './components/profile.css'
import './App.css'
import { LeftNvigationBar } from './components/LeftNvigationBar'
import { MainMenu } from './components/MainMenu'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Profile } from './components/Profile'
import { Bookmarks } from './components/Bookmarks'
import { Lists } from './components/Lists'



function App() {
  const [posts, setPosts] = useState([])
  
  const [user, setUser] = useState({
    profileImage: "https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg",
    name: "Roronoa Zoro",
    userName: "@rononoaZoro",
    place : "Boston",
    bornIn : "USA",
    joined : "Aug 24",
    followers : "86",
    following : "3",
    posts : "86",
  })

  const [lists , setLists] = useState(
    [
      {
        id: 1,
        name: "The Music",
        discription: "🎶🎶🎶🎶",
        image: "https://cdn1.vectorstock.com/i/1000x1000/18/00/list-icon-white-on-the-blue-background-vector-3451800.jpg",
      },
      {
        id: 2,
        name: "The Movies",
        discription: "🎥🎥🎥🎥",
        image: "https://cdn1.vectorstock.com/i/1000x1000/18/00/list-icon-white-on-the-blue-background-vector-3451800.jpg",
      },
      {
        id: 3,
        name: "The Books",
        discription: "📚📚📚📚",
        image: "https://cdn1.vectorstock.com/i/1000x1000/18/00/list-icon-white-on-the-blue-background-vector-3451800.jpg",
      },
      {
        id: 4,
        name: "The Games",
        discription: "🎮🎮🎮🎮",
        image: "https://cdn1.vectorstock.com/i/1000x1000/18/00/list-icon-white-on-the-blue-background-vector-3451800.jpg",
      }
    ]
  )


  // add a coment to a post when i type in the form
   function addComment(comment, postId) {
    e.preventDefault()
    setPosts(posts.map(post => {
      if (post.id === postId) {
        post.commentSection.push(comment)
      }
      return post
    }))
  }
  
  useEffect(() => {
    fetch('http://localhost:4000/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  } , [])
  

    
  
   

  return (

    //fetch the user data from the server
    
         
    
    <div className='App'>


      <><LeftNvigationBar /><Routes>
        <Route path='/' element={<MainMenu posts={posts} setPosts={setPosts} addComment={addComment} />} />
        <Route path='/bookmarks' element={<Bookmarks user={user} />} />
        <Route path='/lists' element={<Lists lists={lists} />} />
        <Route path='/profile' element={<Profile user={user} />} />

      </Routes></>
      
    </div>
  )
}

export default App;
