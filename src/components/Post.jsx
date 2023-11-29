import React, { useContext } from 'react'
import {PostList} from '../store/post-list-store'


export default function Post({ post }) {

   const {deletePost}=useContext(PostList);


  return (
   

      <div className="card post-card" style={{ minWidth: "30rem",margin:"20px 50px" }} >

        <div className="card-body">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)} style={{cursor:"pointer"}}>
           delete


          </span>
          <h5 className="card-title">{post.title}</h5>


          <p className="card-text">{post.body}</p>
         
          {
            post.tags.map((tag) => {
              return (<span key={tag} className='badge text-bg-primary mx-1 hastags'>#{tag}</span>);
            })
          }

          <div className="alert alert-success reaction" role="alert">
        This Post has been reacted by <span><strong>{post.reactions}</strong></span> People
          </div>


        </div>
      </div>
  


  )
}
