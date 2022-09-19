import React from 'react'

const Home = (props) => {

  const { username } = props.user

  return (
    <div>
      <h1>Home</h1>

      <h3>{username !== undefined ? 'Welcome ' + username : null  }</h3>
    </div>
  )
}

export default Home
