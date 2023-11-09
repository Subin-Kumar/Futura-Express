import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { dataRemove } from './Slice'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { getUser } from './apiCall/api';

function Home() {
  const Profile = useSelector(state => state.usData.Pass)
  const [Gdata, setGdata] = useState([])
  console.log("Profile", Profile);

  const p = Profile[0]

  console.log("pid", p._id);
  const dispatch = useDispatch()
  const lo = () => {
    dispatch(dataRemove())
  }

useEffect(() => {
const gdf=async()=>{
  const gd =await getUser(p._id)
  
setGdata(gd.data&&gd.data)
}
   gdf()
  
}, [])
console.log('gd--', Gdata.username);









  return (
    <div  >
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" >{Gdata.username}</Navbar.Brand>
          <Nav className="me-auto">
            <img style={{ height: '50px', width: '50px', display: 'inline-block', borderRadius: '100px' }} src={`/Images/${Gdata.image}`} alt="" />

            <div>
              <div style={{ display: 'flex', paddingLeft: '20px', paddingTop: '13px' }}>
                <h6 style={{ color: 'white' }}>Email : {Gdata.email}</h6>
                <h6 style={{ color: 'grey', paddingLeft: '20px' }}>Age : {Gdata.age}</h6>
                <h6 style={{ color: 'white', paddingLeft: '20px' }}>Address : {Gdata.address}</h6>
              </div>
            </div>
          </Nav>
        </Container>
      </Navbar>

      <div className='outer'>

        <div >
          <Link to={'/up'} ><Button variant='success'>Update your account</Button></Link>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Button variant="danger" onClick={lo}>Log Out</Button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Link to={'del'} ><Button variant='warning'>Delete your account</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default Home
