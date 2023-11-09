import React, { useState } from 'react'
import { Signin, getdata } from './apiCall/api'
import { useDispatch } from 'react-redux'
import { dataRemove } from './Slice'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignUp() {
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [age, setage] = useState(0)
  const [address, setaddress] = useState('')
  const [password, setpassword] = useState('')
  const [image, setimage] = useState({})

  const dispatch = useDispatch()


  const disp = (e) => {
    e.preventDefault()
    var Fdata=new FormData()
    Fdata.append('username',username)
    Fdata.append('email',email)
    Fdata.append('age',age)
    Fdata.append('address',address)
    Fdata.append('image',image)
    Fdata.append('password',password)

    console.log(username, email, age, address);
    Signin(Fdata)

  }
  const gettdata = () => {
    getdata(dispatch)

  }
  const removedata = () => {
    dispatch(dataRemove())
  }

 
  

  return (
    <div>
      <div className='iha'>
        <Link to={'/'}><Button variant='warning'>I have an Account</Button></Link>
      </div>
      <div className='outer'>
        <h2 style={{ color: 'white' }}>SignUp</h2>
        <Form onSubmit={disp} encType='multipart/form-data'>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: 'white' }}>UserName</Form.Label>
            <Form.Control style={{ width: '800px' }} type="text" placeholder="Enter UserName" value={username} onChange={(e) => setusername(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: 'white' }}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setemail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: 'white' }}>Age</Form.Label>
            <Form.Control type="Number" placeholder="Enter Age" value={age} onChange={(e) => setage(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: 'white' }}>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" value={address} onChange={(e) => setaddress(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: 'white' }}>Image</Form.Label>
            <Form.Control type="file" placeholder="Insert image" filename='image' onChange={(e) => setimage(e.target.files[0])} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: 'white' }}>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e) => setpassword(e.target.value)} />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>



      </div>
      <div style={{ marginLeft: '750px', marginTop: '30px' }}>
        <Button style={{ marginRight: '30px' }} variant='info' onClick={gettdata}>Get Data</Button>
        <Button variant='danger' onClick={removedata}>Remove All Data</Button>
      </div>
    </div>



  )
}

export default SignUp
