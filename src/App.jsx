import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import './App.css'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import PostListProvider from './store/post-list-store'

export default function App() {


  const[selectedTab,setSelectedTab]=useState('Home');
  return (
  <PostListProvider>
      <div className='app-container'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
     <div className="content">
      <Header  />
     {selectedTab==='Home'?(<PostList/> ):( <CreatePost/>)

     }
   
   
      <Footer />
     </div>
    </div>
  </PostListProvider>
  )
}
