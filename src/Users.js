import React from "react";
import { useState ,useEffect} from "react";
import {Link} from "react-router-dom"
import axios from "axios";
function Users() {
const [users,setUsers] = useState([])

useEffect(()=>{

    axios.get('http://localhost:4000')
    .then(result=>setUsers(result.data))
    .catch(err=>console.log(err))
},[users]
)


const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/deleteUser/${id}`) // Template literal for cleaner string formatting
      .then((res) => {
        console.log(res.data); // Log the actual response data
        // Display a success message or redirect to a relevant page
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
        // Display a user-friendly error message
        // Potentially offer options to retry or take alternative actions
      });
  };
  
  
  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to  = "/create" className='btn btn-success'>Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user)=>{
                    return <tr>
                        <td>
                            {user.name}
                        </td>
                        <td>
                            {user.email}
                        </td>
                        <td>
                            {user.age}
                        </td>
                        <td>        <Link to  = {`/update/${user._id}`} className='btn btn-success'>Update</Link>
 <button className='btn btn-danger' onClick={(e)=>handleDelete(user._id)}>Delete</button> </td>
                    </tr>

                })
            }

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
