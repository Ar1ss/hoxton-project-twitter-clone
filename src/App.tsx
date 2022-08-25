import './components/LeftNav.css'
import './components/HomePage.css'
import './components/RightMenu.css'
import './App.css'
import { LeftNvigationBar } from './components/LeftNvigationBar'
import { MainMenu } from './components/MainMenu'
import { RightMenuBar } from './components/RightMenuBar'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

function App () {
  const [posts, setPosts] = useState([
    {
      id: '1',
      profileImage:
        'https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg',
      name: 'Rononoa Zoro',
      userName: '  @rononoaZoro',
      timeStamp: '11:11',
      postImage:
        'https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg',
      postText: 'This is a post',
      likes: '0',
      comments: '0'
    },
    {
      id: '2',
      profileImage:
        'https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg',
      name: 'Aris Alshiqi',
      userName: 'jdoe',
      timeStamp: '11:11',
      postImage:
        'https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg',
      postText: 'This is a post',
      likes: '0',
      comments: '0'
    },
    {
      id: '3',
      profileImage:
        'https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg',
      name: 'Ed',
      userName: 'jdoe',
      timeStamp: '11:11',
      postImage:
        'https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg',
      postText: 'This is a post',
      likes: '0',
      comments: '0'
    },
    {
      id: '4',
      profileImage:
        'https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg',
      name: 'Nico',
      userName: 'jdoe',
      timeStamp: '11:11',
      postImage:
        'https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg',
      postText: 'This is a post',
      likes: '0',
      comments: '0'
    },
    {
      id: '5',
      profileImage:
        'https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg',
      name: 'John Doe',
      userName: 'jdoe',
      timeStamp: '11:11',
      postImage:
        'https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg',
      postText: 'This is a post',
      likes: '0',
      comments: '0'
    }
  ])

  return (

    <div className='App'>

    
      <LeftNvigationBar />
      
      <Routes>
        <Route path='/' element={<MainMenu posts = {posts} />}/>
        <Route path='/explore' element={<div>Explore</div>} />
        <Route path='/notifications' element={<div>Notifications</div>} />
        <Route path='/messages' element={<div>Messages</div>} />
        <Route path='/bookmarks' element={<div>Bookmarks</div>} />
        <Route path='/lists' element={<div>Lists</div>} />
        <Route path='/profile' element={<div>Profile</div>} />
        <Route path='/more' element={<div>More</div>} />
      </Routes>
      <RightMenuBar />
    </div>
  )
}

export default App;
