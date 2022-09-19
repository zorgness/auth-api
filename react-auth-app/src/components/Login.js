import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate} from 'react-router'

const Login = props => {

  const data = {
    "email" : "",
    "password" : "",

  }

  const [loginData, setLoginData] = useState(data);
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false)


  const {email, password } = loginData

  const handleChange = e => {

    setLoginData({...loginData, [e.target.id]: e.target.value})
  }

  const handleSubmit = e => {

    const {email, password } = loginData


      const data = {
        "user": {
          "email": email,
          "password": password,

          }}

      fetchData('http://localhost:3000//users/sign_in', data)

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

      if(fetchedData.message === 'Logged.') {

        // await sessionStorage.setItem('user', JSON.stringify(fetchedData.user))
        props.setUserData(fetchedData.user)
        setRedirect(true)
      }
    }
    catch (error) {
      setError(error)
    }
  }

  const errorMsg = error !== '' && <span>{error.message}</span>;


  if (redirect) {
    return <Navigate to='/'/>;
  }

  return (
    <div className='form-container'>
    <h1>Login</h1>

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
      <Form.Label>Password</Form.Label>
      <Form.Control onChange={handleChange} value={password} type="password" id="password" placeholder="Password" />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div>
  )
}

export default Login
