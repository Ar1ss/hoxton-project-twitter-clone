import './components/LeftNav.css'
import './components/HomePage.css'
import './components/RightMenu.css'
import './components/profile.css'
import './App.css'
import { LeftNvigationBar } from './components/LeftNvigationBar'
import { MainMenu } from './components/MainMenu'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { Profile } from './components/Profile'
import { Bookmarks } from './components/Bookmarks'
import { Lists } from './components/Lists'



function App() {
  const [posts, setPosts] = useState([
    {
      "id": 1,
      "profileImage": "https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg",
      "name": "Rononoa Zoro",
      "userName": "  @rononoaZoro",
      "timeStamp": "Aug 25",
      "postImage": "https://c4.wallpaperflare.com/wallpaper/995/589/273/metal-katana-wakizashi-aspect-wallpaper-preview.jpg",
      "postText": "I love this katana",
      "likes": 231,
      "commentCount": 3,
      "commentSection": [
        {
          "Commnetid": 1,
          "commentText": "Nice Sword",
          "commentUserName": "  @rononoaZoro",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://qph.cf2.quoracdn.net/main-qimg-6e7d5367d76fb66385ec2b9c48c598a7-pjlq"
        },
        {
          "commentId": 2,
          "commentText": "Bushido",
          "commentUserName": " @sanji",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://i.pinimg.com/736x/e9/6f/83/e96f83a6a8c3c859a362470e8abe065f.jpg"
        },
        {
          "commentId": 3,
          "commentText": "yooo Zoro",
          "commentUserName": "  @luffy",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://i1.sndcdn.com/avatars-000589154457-u2cvrc-t500x500.jpg"
        }
      ]
    },
    {
      "id": 2,
      "profileImage": "https://i.pinimg.com/736x/e9/6f/83/e96f83a6a8c3c859a362470e8abe065f.jpg",
      "name": "Sanji",
      "userName": "@sanji",
      "timeStamp": "Aug 24",
      "postImage": "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2022/06/p-1-best-easy-cooking-recipes.jpg",
      "postText": "Cooking is what I do",
      "likes": 12,
      "commentCount": 2,
      "commentSection": [
        {
          "commentId": 1,
          "commentText": "I love this katana",
          "commentUserName": "  @rononoaZoro",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg"
        },
        {
          "commentId": 2,
          "commentText": "I love this katana",
          "commentUserName": " @sanji",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://i.pinimg.com/736x/e9/6f/83/e96f83a6a8c3c859a362470e8abe065f.jpg"
        },
        {
          "commentId": 3,
          "commentText": "I love this katana",
          "commentUserName": "  @luffy",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://i1.sndcdn.com/avatars-000589154457-u2cvrc-t500x500.jpg"
        }
      ]
    },
    {
      "id": 3,
      "profileImage": "https://i1.sndcdn.com/avatars-000589154457-u2cvrc-t500x500.jpg",
      "name": "Luffy",
      "userName": "@luffy",
      "timeStamp": "Aug 24 11:00 pm",
      "postImage": "https://izzycooking.com/wp-content/uploads/2022/05/Grilled-Beef-Steak-thumbnail.jpg",
      "postText": "I love  meshi and im going to be king of the pirates",
      "likes": 12,
      "commentCount": 2,
      "commentSection": [
        {
          "commentId": 1,
          "commentText": "I love this katana",
          "commentUserName": "  @rononoaZoro",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg"
        },
        {
          "commentId": 2,
          "commentText": "I love this katana",
          "commentUserName": " @sanji",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://i.pinimg.com/736x/e9/6f/83/e96f83a6a8c3c859a362470e8abe065f.jpg"
        },
        {
          "commentId": 3,
          "commentText": "I love this katana",
          "commentUserName": "  @luffy",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://i1.sndcdn.com/avatars-000589154457-u2cvrc-t500x500.jpg"
        }
      ]
    },
    {
      "id": 4,
      "profileImage": "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/07/02/3456183416.jpg",
      "name": "   Nami",
      "userName": "@nami",
      "timeStamp": "Aug 24",
      "postImage": "https://www.marxist.com/images/stories/economy/Money_-_Pictures_of_Money--Flickr_flickr.com--photos--pictures-of-money--17123251389.jpg",
      "postText": "Berry <3",
      "likes": 73,
      "commentCount": 2,
      "commentSection": [
        {
          "commentId": 1,
          "commentText": "I love this katana",
          "commentUserName": "  @rononoaZoro",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg"
        },
        {
          "commentId": 2,
          "commentText": "I love this katana",
          "commentUserName": " @sanji",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://i.pinimg.com/736x/e9/6f/83/e96f83a6a8c3c859a362470e8abe065f.jpg"
        },
        {
          "commentId": 3,
          "commentText": "I love this katana",
          "commentUserName": "  @luffy",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://i1.sndcdn.com/avatars-000589154457-u2cvrc-t500x500.jpg"
        }
      ]
    },
    {
      "id": 5,
      "profileImage": "https://qph.cf2.quoracdn.net/main-qimg-6e7d5367d76fb66385ec2b9c48c598a7-pjlq",
      "name": "Ussop",
      "userName": "@ussop",
      "timeStamp": "Aug 24",
      "postImage": "https://www.thedefensepost.com/wp-content/uploads/2022/04/220413-F-F3456-1001-scaled.jpg",
      "postText": "I'm goning to be a warrior of the sea",
      "likes": 13,
      "commentCount": 1,
      "commentSection": [
        {
          "commentId": 1,
          "commentText": "I love this katana",
          "commentUserName": "  @rononoaZoro",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg"
        },
        {
          "commentId": 2,
          "commentText": "I love this katana",
          "commentUserName": " @sanji",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://i.pinimg.com/736x/e9/6f/83/e96f83a6a8c3c859a362470e8abe065f.jpg"
        },
        {
          "commentId": 3,
          "commentText": "I love this katana",
          "commentUserName": "  @luffy",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://i1.sndcdn.com/avatars-000589154457-u2cvrc-t500x500.jpg"
        }
      ]
    },
    {
      "id": 5,
      "profileImage": "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/08/04/659717902.jpg",
      "name": "Nico Robin",
      "userName": "@nicoRobin",
      "timeStamp": "Aug 24",
      "postImage": "https://cdna.artstation.com/p/assets/images/images/004/449/658/large/sochetra-rith-screenshot002.jpg?1483884307",
      "postText": "I'm the arceologist",
      "likes": 98,
      "commentCount": 3,
      "commentSection": [
        {
          "commentId": 1,
          "commentText": "I love this katana",
          "commentUserName": "  @rononoaZoro",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg"
        },
        {
          "commentId": 2,
          "commentText": "I love this katana",
          "commentUserName": " @sanji",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://i.pinimg.com/736x/e9/6f/83/e96f83a6a8c3c859a362470e8abe065f.jpg"
        },
        {
          "commentId": 3,
          "commentText": "I love this katana",
          "commentUserName": "  @luffy",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://i1.sndcdn.com/avatars-000589154457-u2cvrc-t500x500.jpg"
        }
      ]
    },
    {
      "id": 5,
      "profileImage": "https://i.pinimg.com/736x/40/0b/07/400b07e863d87804a49f8d9f7c928387.jpg",
      "name": "Franky",
      "userName": "@franky",
      "timeStamp": "Aug 24",
      "postImage": "https://wallpapercave.com/wp/s5xMXCU.jpg",
      "postText": "Super",
      "likes": 86,
      "commentCount": 3,
      "commentSection": [
        {
          "commentId": 1,
          "commentText": "I love this katana",
          "commentUserName": "  @rononoaZoro",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg"
        },
        {
          "commentId": 2,
          "commentText": "I love this katana",
          "commentUserName": " @sanji",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://i.pinimg.com/736x/e9/6f/83/e96f83a6a8c3c859a362470e8abe065f.jpg"
        },
        {
          "commentId": 3,
          "commentText": "I love this katana",
          "commentUserName": "  @luffy",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://i1.sndcdn.com/avatars-000589154457-u2cvrc-t500x500.jpg"
        }
      ]
    },
    {
      "id": 5,
      "profileImage": "https://imgix.ranker.com/user_node_img/50088/1001742854/original/fun-to-see-photo-u2?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375",
      "name": "Brook",
      "userName": "@brook",
      "timeStamp": "Aug 24",
      "postImage": "https://img5.goodfon.com/wallpaper/nbig/5/e3/skripka-makro-muzyka-2.jpg ",
      "postText": "I'm goning to be a warrior of the sea",
      "likes": 7,
      "commentCount": 2,
      "commentSection": [
        {
          "commentId": 1,
          "commentText": "I love this katana",
          "commentUserName": "  @rononoaZoro",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg"
        },
        {
          "commentId": 2,
          "commentText": "I love this katana",
          "commentUserName": " @sanji",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://i.pinimg.com/736x/e9/6f/83/e96f83a6a8c3c859a362470e8abe065f.jpg"
        },
        {
          "commentId": 3,
          "commentText": "I love this katana",
          "commentUserName": "  @luffy",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://i1.sndcdn.com/avatars-000589154457-u2cvrc-t500x500.jpg"
        }
      ]
    },
    {
      "id": 5,
      "profileImage": "https://i.pinimg.com/originals/f4/39/3b/f4393bc314da97c67da0483c8caafe5d.jpg",
      "name": "Jinbe",
      "userName": "@jinbe",
      "timeStamp": "Aug 24",
      "postImage": "https://www.thoughtco.com/thmb/D6dR0ruSIwI0Mo6sA-0wxl1zQh8=/3527x1984/smart/filters:no_upscale()/-mayflower-ii-replica-at-sunset--massachusetts--73068552-59c4643ac412440010f73d33.jpg",
      "postText": "",
      "likes": 86,
      "commentCount": 1,
      "commentSection": [
        {
          "commentId": 1,
          "commentText": "Where is Luffy?",
          "commentUserName": "  @rononoaZoro",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg"
        },
        {
          "commentId": 2,
          "commentText": "Nice Ship",
          "commentUserName": " @sanji",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://i.pinimg.com/736x/e9/6f/83/e96f83a6a8c3c859a362470e8abe065f.jpg"
        },
        {
          "commentId": 3,
          "commentText": "YOOOO Jinmbe",
          "commentUserName": "  @luffy",
          "commentTimeStamp": "Aug 25",
          "commentImage": "https://i1.sndcdn.com/avatars-000589154457-u2cvrc-t500x500.jpg"
        }
      ]
    }
  ])
  
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
   

  return (

  
    <div className='App'>


      <LeftNvigationBar />
      <Routes>
        <Route path='/' element={<MainMenu posts={posts}  setPosts={setPosts} addComment={addComment}  />} />
        <Route path='/bookmarks' element={<Bookmarks user={user} />} />
        <Route path='/lists' element={<Lists lists={lists} />} />
        <Route path='/profile' element={<Profile user={user} />} />
        
      </Routes>
      
    </div>
  )
}

export default App;
