import React from 'react'

export default function Sidebar({selectedTab,setSelectedTab}) {
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark " style={{width: "180px",minHeight:"800px"}}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                   
                    <span className="fs-4">{selectedTab}</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item" onClick={()=>setSelectedTab("Home")}>
                        <a href="#" className={`nav-link text-white ${selectedTab==='Home'&&"active"}`} aria-current="page">
                           Home
                       
                        </a>
                    </li>
                    <li  className="nav-item" onClick={()=>setSelectedTab("Create Post")}>
                        <a href="#" className={`nav-link text-white  ${selectedTab==='Create Post'&&"active"}`} aria-current="page">
                          
                           Create Post
                        </a>
                    </li>
                  
                </ul>
                <hr />

            </div>
        </>

    )
}
