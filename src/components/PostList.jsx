import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/post-list-store';
import WelcomeMessage from './WelcomeMessage';
import LoadingSpinner from './LoadingSpinner';

export default function PostList() {
  const { postList,Fetching } = useContext(PostListData);
 




return (
  <div className="container my-3">
    {Fetching && <LoadingSpinner/>}
    {!Fetching && postList.length === 0 && <WelcomeMessage />}
    {
     !Fetching && postList.map((post) => {
        return <Post key={post.Id} post={post} />
      })
    }






  </div>
)
}
