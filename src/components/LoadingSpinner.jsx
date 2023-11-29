import React from 'react'

export default function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center" style={{margin:"10% 0"}}>
    <div className="spinner-border" role="status" style={{width: "3rem", height:"3rem"}}> 
      <span className="visually-hidden" >Loading...</span>
    </div>
  </div>
  )
}
