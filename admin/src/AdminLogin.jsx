import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { AdLogin} from './ApiAdmin/ApiAd';
import { AdminDataremove, dataRemove } from './SliceAdm';

function AdminLogin() {
    const [emaillog, setemaillog] = useState('')
    const [passwordlog, setpasswordlog] = useState('')
    const dispatch = useDispatch()
    const logg = () => {
        console.log("log details", emaillog, passwordlog);
        AdLogin(dispatch, { emaillog, passwordlog })
    }
    const del=()=>{
        dispatch(dataRemove())
    }
  return (
    <div>
       <div className='outer'>
                <h1 style={{color:'white'}}>Admin Login</h1>
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
                <div className='log'>
                <Button variant='success' onClick={logg}>Login</Button>
                </div>
                
                <div>
                <Button variant='info' onClick={del} >Delete Admin  All data</Button>
                </div>
            </div>
    </div>
  )
}

export default AdminLogin
