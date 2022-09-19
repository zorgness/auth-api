import React from 'react'

const Home = (props) => {

  return (
    <div>
      <h1>Home</h1>

      <h3>{props.user.email !== undefined ? 'Welcome ' + props.user.email : null  }</h3>
    </div>
  )
}

export default Home
