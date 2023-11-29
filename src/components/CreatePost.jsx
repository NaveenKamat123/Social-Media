import React,{useContext, useRef} from 'react'
import {PostList} from '../store/post-list-store'

export default function CreatePost() {
    const user_id_Element=useRef();
    const user_title_Element=useRef();
    const user_content_Element=useRef();
    const user_reactions_Element=useRef();
    const user_tags_Element=useRef();

    const {addPost}=useContext(PostList);
    const handleSubmit=(event)=>{
        event.preventDefault();
        const user_id=user_id_Element.current.value;
        const user_title=user_title_Element.current.value;
        const user_content=user_content_Element.current.value;
        const user_reactions=user_reactions_Element.current.value;
        const user_tags=user_tags_Element.current.value.split(' ');
         user_id_Element.current.value='';user_title_Element.current.value='';user_content_Element.current.value='';user_reactions_Element.current.value='';user_tags_Element.current.value='';

         fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( 
                {
           
            title: user_title,
            body: user_content,
            reactions: user_reactions,
            userId:user_id,
            tags:user_tags,
           
          }),
        }).then((res)=>{
            return res.json();
        }).then((post)=>{
          
            addPost(post);
        })
    };

    return (
        <div className='container my-5 mx-5 ' onSubmit={handleSubmit}>
            <form className='create-post'>
                <div className="mb-3 ">
                    <label htmlFor="userId" className="form-label">User Id</label>
                    <input type="number" className="form-control" id="userId"  placeholder=' Enter Your User Id'  ref={user_id_Element}/>

                </div>
                <div className="mb-3 ">
                    <label htmlFor="title" className="form-label">Post title</label>
                    <input type="text" className="form-control" id="title"  placeholder='How are you Feeling Today' ref={user_title_Element} />

                </div>

                <div className="mb-3 ">
                    <label htmlFor="body" className="form-label">Post Content</label>
                    <textarea type="email" className="form-control" id="body"  placeholder='Tell us more about it' rows="6" ref={user_content_Element}/>

                </div>

                <div className="mb-3 ">
                    <label htmlFor="reaction" className="form-label">Number of Reactions</label>
                    <input type="number" className="form-control" id="reaction"  placeholder='How many people Reacted on this' ref={user_reactions_Element} />

                </div>

                <div className="mb-3 ">
                    <label htmlFor="tags" className="form-label">Enter your Hashtags</label>
                    <input type="text" className="form-control" id="tags"  placeholder='Enter your hastags using Spaces ' ref={user_tags_Element} />

                </div>

                <button type="submit" className="btn btn-primary" > Post Submit</button>
            </form>
        </div>
    )
}
