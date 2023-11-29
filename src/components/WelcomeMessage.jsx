import React from 'react'
import CreatePost from './CreatePost'


export default function WelcomeMessage({onGetPostClick}) {
    return (
        <div className='container'>
            <div className="px-4 py-5 my-5 text-center">

                <h1 className="display-5 fw-bold text-body-emphasis">There is no Posts !</h1>
              
            </div>
            
        </div>
      
    )
}
