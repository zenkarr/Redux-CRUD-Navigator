import React, { useState } from "react";
import { NavLink, useNavigate, useParams, Link, Outlet } from 'react-router-dom';
import { Users } from "../userFullInfo/userFullInfo";
import './userDetails.css'
import UserView from "./userView/userView";

interface IUserDetails {
    addNew?: boolean;
}
export default function UserDetails(props: IUserDetails) {
    const navigate = useNavigate();

    let { userId } = useParams();

    let userDetailsInfo;
    if (!props.addNew) {
        userDetailsInfo = Users.find((user) => user.id === Number(userId));
    }

    const [user, setuser] = useState(userDetailsInfo);

    // This method use for store the onchange data by user
    const updateUserOnChange = (event: any) => {
        const copyUser: any = { ...user };
        copyUser[event.target.name] = event.target.value;
        setuser(copyUser);
    }


    // This method use for update user data
    const submitUserDetails = () => {
        const indexValue = Users.findIndex((data) => data.id === Number(userId));
        if (indexValue >= 0) {
            Users[indexValue] = user as any;
        }
        navigate("/employees");
    }

    // This method use for add the new user data
    const AddNewUser = () => {
        const userId = `${Users.length + 1}`
        const copyUser: any = { ...user };
        copyUser.id = Number(userId);
        Users.push(copyUser);
        navigate('/employees')

    }

    return (
        <div className="userDetails">
            {userDetailsInfo || props.addNew ?
                <UserView
                    firstName={user ? user.firstName : ""}
                    lastName={user ? user.lastName : ""}
                    email={user ? user.email : ""}
                    updateUser={updateUserOnChange}
                    buttonLabel={props.addNew ? "Add New User" : "Update"}
                    onClickButton={props.addNew ? AddNewUser : submitUserDetails}
                />
                :
                <h1>No user details available</h1>}
        </div>
    );

}