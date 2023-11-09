import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { OtpSnd } from './apiCall/api';

function ForPass() {

    const [FMail,setFMail]=useState('')

    const OtpS=()=>{

        OtpSnd({FMail})

    }
    return (
        <div>
            <div className='outer'>
                <h1 style={{color:'white',paddingBottom:'50px'}}>Forgot Password</h1>
                <div className='eml'>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                            placeholder="Email id" aria-label="Username" aria-describedby="basic-addon1"
                            value={FMail} onChange={(e)=>setFMail(e.target.value)}
                        />
                    </InputGroup>
                    <div className='SnOtp'>
                        <Button variant='success' onClick={OtpS}>Send Otp</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForPass
