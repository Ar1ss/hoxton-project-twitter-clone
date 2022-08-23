import './components/LeftNav.css'
import './components/HomePage.css'
import './App.css'
import { LeftNvigationBar } from './components/LeftNvigationBar'
import { MainMenu } from './components/MainMenu'
import { RightMenuBar } from './components/RightMenuBar'

function App() {
 

  return (
    <div className="App">

    <LeftNvigationBar />
    <MainMenu />
    <RightMenuBar />

    </div>
  )
}

export default App
