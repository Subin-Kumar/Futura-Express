import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LoginF } from './apiCall/api';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './Style.css'
import { dataRemove } from './Slice';

function Login() {
    const [emaillog, setemaillog] = useState('')
    const [passwordlog, setpasswordlog] = useState('')
    const dispatch = useDispatch()
    const logg = () => {
        console.log("log details", emaillog, passwordlog);
        LoginF(dispatch, { emaillog, passwordlog })
    }
    const loo=()=>{
        dispatch(dataRemove())
    }

    return (
        <div>
            <div className='outer'>
                <h1 style={{color:'white'}}>Login</h1>
                <div className='eml'>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                            placeholder="Email id"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={emaillog} onChange={(e) => setemaillog(e.target.value)} 
                        />
                    </InputGroup>
                </div>
                <div className='pass'>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                        <Form.Control
                            placeholder="Password"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={passwordlog} onChange={(e) => setpasswordlog(e.target.value)} 
                        />
                    </InputGroup>

                </div>
                <div><Link to={'otp'} style={{textDecoration:'none',color:'white',paddingBottom:'20px'}}>Forgot Password</Link></div>
                <div className='log'>
                <Button variant='success' onClick={logg}>Login</Button>
                </div>
                <div className='cna'>
                    {/* <button onClick={loo}>logout</button> */}
                <Link to={'signup'} style={{textDecoration:'none'}}><Button variant='info' >Create New Account</Button></Link>
                </div>
            </div>


            {/* <input type="text" placeholder='email' value={emaillog} onChange={(e) => setemaillog(e.target.value)} />
            <input type="text" placeholder='password' value={passwordlog} onChange={(e) => setpasswordlog(e.target.value)} /> */}
            
           
        </div>

    )
}

export default Login
