import React, { useState } from "react";
import "./employees.css";
import { NavLink, useNavigate, useParams, Link, Outlet } from 'react-router-dom';
import { Users } from "../userFullInfo/userFullInfo";

function Employees() {

    const navigate = useNavigate();
    const [user, setuser] = useState(Users);

    // This method use for delete the employees data 
    const handleDelete = (index: any) => {
        // const newUserList = user.filter((data) => data.id !== Number(id));
        // setuser(newUserList);

        user.splice(index, 1) //remove user based on index
        setuser([...user]); //display updated user list

    }

    return (
        <div className="employees">
            <div>
                <input className="userDetails-addUser" onClick={() => navigate('/users/addUser')} type="submit" value="Add New User" />
            </div>
            <table className="table">
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>

                {user.map((list: any, index) =>
                    <tr key={index}>
                        <td><NavLink to={`/users/${list.id}`}>{list.id}</NavLink></td>
                        <td><NavLink to={`/users/${list.id}`}>{list.firstName}</NavLink></td>
                        <td><NavLink to={`/users/${list.id}`}>{list.lastName}</NavLink></td>
                        <td><NavLink to={`/users/${list.id}`}>{list.email}</NavLink></td>
                        <td><button className="userDetails-delete" onClick={() => handleDelete(index)}>Delete</button></td>

                    </tr>

                )}

            </table>
        </div>
    )
}
export default Employees;
