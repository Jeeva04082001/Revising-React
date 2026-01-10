import React from 'react'

//Props [11-06-2025]

function User({Name,Age,Phone}) {
  return (
    <div>
        <h1>{Name}</h1>
        <h1>{Age}</h1>
        <h1>{Phone}</h1>
        {/* <h1>{Email}</h1> */}
    </div>
  )
}

export default User;

