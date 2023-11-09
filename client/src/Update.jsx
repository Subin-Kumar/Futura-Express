import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Updated, getUser } from './apiCall/api';
import { useNavigate } from 'react-router-dom';


function Update() {
    const nav=useNavigate()
    const data = useSelector(state => state.usData.Pass);
    // console.log("data---", data);
    const [Gdata, setGdata] = useState([])
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [age, setage] = useState(0)
    const [address, setaddress] = useState('')
    const [password, setpassword] = useState('')

    useEffect(() => {
        const gdf=async()=>{
            const gd =await getUser(data[0]._id)
            
          setGdata(gd.data&&gd.data)
          }
             gdf()
        setusername(Gdata.username)
        setemail(Gdata.email)
        setage(Gdata.age)
        setaddress(Gdata.address)

    }, [])
    console.log('gdata un--',Gdata.username);





    const disp = (e) => {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('username', username)
        formdata.append('email', email)
        formdata.append('age', age)
        formdata.append('address', address)

        var dataid = data[0] && data[0]._id
        console.log("fd----", formdata);
        console.log("dataform--", { username, email, age, address, dataid });
        Updated({ username, email, age, address }, dataid,nav)
       
    }
    return (
        <div>
            <div className='outer'>
                <h1 style={{color:'white'}}>Update</h1>
                <Form onSubmit={disp} encType='multipart/form-data'>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ color: 'white' }}>UserName</Form.Label>
                        <Form.Control style={{ width: '800px' }} type="text" placeholder={Gdata.username} value={username} onChange={(e) => setusername(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ color: 'white' }}>Email address</Form.Label>
                        <Form.Control type="email" placeholder={Gdata.email} value={email} onChange={(e) => setemail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ color: 'white' }}>Age</Form.Label>
                        <Form.Control type="Number" placeholder={Gdata.age} value={age} onChange={(e) => setage(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ color: 'white' }}>Address</Form.Label>
                        <Form.Control type="text" placeholder={Gdata.address} value={address} onChange={(e) => setaddress(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={{ color: 'white' }}>Password</Form.Label>
                        <Form.Control type="password" placeholder='********' value={password} onChange={(e) => setpassword(e.target.value)} />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Update
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Update
