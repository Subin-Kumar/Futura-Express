import React from 'react'
import { deleteAcc } from './apiCall/api'
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function FormatAccount() {
  const Userdata = useSelector(state => state.usData.Pass)
  var userid = Userdata[0] && Userdata[0]._id
  console.log(userid);
  const navigate =useNavigate()
  const dispatch=useDispatch()
  const df = () => {

    deleteAcc(userid,navigate,dispatch)

  }
  return (
    <div>

      <div className='outer'>
        <div >
          <h1 style={{color:'white',marginBottom:'20px'}}> Are u sure to delete your Account</h1>
        </div>
        <div >
        <Button variant='danger' onClick={df}>Delete</Button>

        </div>
      </div>
    


      
     
    </div>
  )
}

export default FormatAccount
