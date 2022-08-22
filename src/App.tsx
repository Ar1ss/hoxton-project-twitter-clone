import { useState } from 'react'
import logo from '.assets/twiter-logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section className='left-navigation-bar'>

      
        
        <ul className='navigation-list'>

        <a href='#'>
        <img className='twitter-logo' width={50} src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg" alt="" />
        </a>

        
          <li className='navigation-list__item' >
            <a href="#">Home</a>
          </li>
          <li className='navigation-list__item' >
            <a href="#">Explore</a>
          </li>
          <li className='navigation-list__item' >
            <a href="#">Notifications</a>
          </li>
          <li className='navigation-list__item' >
            <a href="#">Messages</a>
          </li>
          <li className='navigation-list__item' >
            <a href="#">Bookmarks</a>
          </li>
          <li className='navigation-list__item' >
            <a href="#">Lists</a>
          </li>
          <li className='navigation-list__item' >
            <a href="#">Profile</a>
          </li>
          <li className='navigation-list__item' >
            <a href="#">More</a>
          </li>

          <button>Tweet</button>


        </ul>

        

            
      </section>

      <section className='main-menu'><h1>Main menu</h1></section>

      <section className='right-menu'><h1>Right menu</h1></section>
    </div>
  )
}

export default App
