import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Student() {

    const [student, setStudent]= useState([])
 

    useEffect(()=>{
       Axios.get("http://localhost:8082/login")
       .then(res => setStudent(res.data))
       .catch(err => console.log(err))
    },[])

    const handleDelete =async (id)=>{
        try{
            await Axios.delete('http://localhost:8082/student/'+id)
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        
        <div className='w-50 bg-white rounded p-3'>
             
             <Link to="/create" className='btn btn-success'> Add</Link>
             <table className='table'>
                <thead>
                    <tr>
                    <th>Ind</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      student.map((data, i)=>(
                        <tr key={i}>
                            <td>{i}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>
                                <Link className='btn btn-primary'to={`/update/${data.id}`}>Update</Link>
                                <button className='btn btn-danger ms-2'  onClick={e => handleDelete(data.id)}>Delete</button>
                            </td>
                        </tr>
                      ))
                    }
                </tbody>
             </table>

        </div>


    </div>
  )
}

export default Student