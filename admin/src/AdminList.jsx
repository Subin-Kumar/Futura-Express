import React, { useEffect, useState } from 'react'
import { GetAdmin, delAdmin } from './ApiAdmin/ApiAd'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';


function AdminList() {

  const [AAllData, setAAllData] = useState([])
  // const Userdata = useSelector(state => state.usData.Pass)
  const ALData = useSelector(state => state.AdminData.AdlogD)
  const curId = ALData[0]._id
  console.log("CurId-=", curId);
  console.log("ALData---", ALData);
  useEffect(() => {
    const DispA = async () => {
      const AlldatAA = await GetAdmin()
      console.log("All admin dataGet all------", AlldatAA);
      setAAllData(AlldatAA.data)
    }
    DispA()

  }, [])


  const delA = (id) => {
    console.log("id--", id);
    delAdmin(id)

    window.location.reload()
  }



  return (
    <div>
      <div>
        <div className='iha'>
          <Link to={'/AHome'}> <Button variant='warning'>Back</Button></Link>

        </div>
        <div className='outer'>
        <h1 style={{color:'white'}}>Admin Data</h1>
          <Table striped variant='dark'>
            <thead>
              <tr>
                <th>AdminName</th>
                <th>AdminEmail Id</th>
                <th>Age</th>
                <th>Address</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                AAllData.map((add) => {
                  if (add._id!==curId) {
                    return(
                      <tr key={add._id}>
                      <td style={{ color: "red" }}>{add.username}</td>
                      <td>{add.email}</td>
                      <td>{add.age}</td>
                      <td>{add.address}</td>
                      <td> <Button variant='danger' onClick={() => delA(add._id)}>Delete</Button></td>

                    </tr>
                    )
                   
                  }

                })
              }


            </tbody>
          </Table>
        </div>
       
      </div>


    </div>
  )
}

export default AdminList
