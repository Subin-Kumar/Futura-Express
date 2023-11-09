import React, { useEffect, useState } from 'react'
import './Style.css'
import { useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { GetAll, deleteAcc } from '../src/ApiAdmin/ApiAd';
import Button from 'react-bootstrap/Button';
import { dataRemove } from './SliceAdm';

function AdminHome() {
    const dispatch = useDispatch()


const [Arr, setArr] = useState([])
const [deldata, setdeldata] = useState(1)

    useEffect(() => {
        const Display = async() => {
            const AlldatAA = await GetAll()
            console.log("AlldataGet all------", AlldatAA);
            setArr(AlldatAA.data)
        }
Display()

    }, [])
    // const Adta = useSelector(state=>state.AdminData.AllDataAd);
    // console.log("Mapdata----", Adta);

    const remove = () => {
        dispatch(dataRemove())
    }

    const del = (id) => {
        console.log("id--",id);
        deleteAcc(id)
        setdeldata(deldata+1)
        window.location.reload()
    }
  
    return (
        <div>
            <div className='iha'>
                <Button variant='warning' onClick={remove}>Logout</Button>
            </div>
            <div className='outer'>
                <h1 style={{color:'white'}}>User Data</h1>
                <Table striped variant='dark'>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email Id</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Arr.map((ad)=>(
                                <tr key={ad._id}>
                                <td style={{color:"red"}}>{ad.username}</td>
                                <td>{ad.email}</td>
                                <td>{ad.age}</td>
                                <td>{ad.address}</td>
                                <td> <Button variant='danger' onClick={()=>del(ad._id)}>Delete</Button></td> 

                            </tr>
                            ))
                        }


                    </tbody>
                </Table>
            </div>
            <div className='iha'>
                <Link to={'/AList'}><Button variant='info'>Admin List </Button></Link>
               
                <Link to={'/Asignup'}><Button style={{marginLeft:'30px'}} variant='success' >Create New Admin</Button></Link>
            
            </div>
        </div>
    )
}

export default AdminHome
