import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate} from 'react-router'

const Register = () => {

  const data = {
    "email" : "",
    "username" : "",
    "password" : "",
    "confirmPassword" : "",
  }

  const [registerData, setRegisterData] = useState(data);
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false)


  const {email, username, password, confirmPassword} = registerData

  const handleChange = e => {

    setRegisterData({...registerData, [e.target.id]: e.target.value})
  }

  const handleSubmit = e => {

    const {email, username, password, confirmPassword} = registerData

    if(password !== confirmPassword ) {
      setError(`Invalid password!`)
      console.log(error)

    } else {
      const data = {
        "user": {
          "email": email,
          "username": username,
          "password": password,

          }}

      fetchData('http://localhost:3000/users', data)
    }
    e.preventDefault();

  }

  const fetchData = async (url, data) => {

    try {

      const response = await fetch(url, { method: "POST", headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify(data)

    })

      if(!response.ok) {
        throw new Error(response.message)
      }

      const token = response.headers.get('Authorization')
      localStorage.setItem('token', token)

      const fetchedData = await response.json()

      fetchedData.message === 'Signed up.' && setRedirect(true)

      console.log(fetchedData.message)

    }
    catch (error) {

      setError(error)
    }
  }

  const errorMsg = error !== '' && <span>{error}</span>;



  if (redirect) {
    return <Navigate to='/'/>;
  }

  return (

    <div className='form-container'>
      <h1>Register</h1>

      <div className="failureMsg ">{errorMsg}</div>

      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange} value={email} type="email" id="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control onChange={handleChange} value={username} type="text" id="username" placeholder="Username" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChange} value={password} type="password" id="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" placeholder="Confirm Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Register
