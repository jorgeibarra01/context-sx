import React from 'react'

export default props => {
    console.log('props:sasdf ', props.firebase); 
  return (
    <div>
        <h1> Sample Page: Test. </h1> 
        <button onClick={() => {
          props.firebase.signOut()
          }}> Sign Out</button>
    </div>
  )
}
