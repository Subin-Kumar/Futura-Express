import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AdSignin } from './ApiAdmin/ApiAd'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AdminSignup() {
    
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [age, setage] = useState(0)
    const [address, setaddress] = useState('')
    const [password, setpassword] = useState('')
    const [image, setimage] = useState({})
    const navigate =useNavigate()
   
    
const formdata=new FormData()
formdata.append('username',username)
formdata.append('email',email)
formdata.append('age',age)
formdata.append('address',address)
formdata.append('password',password)
formdata.append('image',image)

const disp=(e)=>{
e.preventDefault()
console.log('formdata--',formdata);
AdSignin({username,email,age,address,password,image},navigate)
}


    return (
        <div>
 
 <div className='outer'>
        <h1 style={{ color: 'white' }}> Admin SignUp</h1>
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
            <Form.Control type="file" placeholder="Insert image" filename='images' onChange={(e) => setimage(e.target.files[0])} />
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

        </div>
    )
}

export default AdminSignup
