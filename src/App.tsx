import './components/LeftNav.css'
import './components/HomePage.css'
import './App.css'
import { LeftNvigationBar } from './components/LeftNvigationBar'
import { MainMenu } from './components/MainMenu'
import { RightMenuBar } from './components/RightMenuBar'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <div className="App">

    <LeftNvigationBar />
    <Routes>
      <Route path="/" element={<MainMenu />} />
      <Route path="/explore" element={<div>Explore</div>} />
      <Route path="/notifications" element={<div>Notifications</div>} />
      <Route path="/messages" element={<div>Messages</div>} />
      <Route path="/bookmarks" element={<div>Bookmarks</div>} />
      <Route path="/lists" element={<div>Lists</div>} />
      <Route path="/profile" element={<div>Profile</div>} />
      <Route path="/more" element={<div>More</div>} />
    </Routes>

    <RightMenuBar />
    

    </div>
  )
}

export default App
