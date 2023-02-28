import React, { useState } from "react";
import { NavLink,useNavigate, useParams, Link, Outlet } from 'react-router-dom';
import './userView.css'

interface IUserView {
    firstName: string;
    lastName: string;
    email: string;
    buttonLabel: string;
    updateUser:(event:any) => void;
    onClickButton:(event:any) => void;

}

export default function UserView({firstName,lastName,email,buttonLabel,onClickButton,updateUser}: IUserView) {
    const navigate = useNavigate();

    return (
        <div className="userDetails">
                <>  
                    <form className="userDetails-form" >
                        <label >First Name</label><br />
                        <input className="userDetails-text"
                            name="firstName"
                            onChange={updateUser} 
                            value={firstName } /><br />

                        <label>Last Name</label><br />
                        <input className="userDetails-text"
                            name="lastName"
                            onChange={updateUser}
                            value={lastName} /><br />

                        <label>Email</label><br />
                        <input className="userDetails-text"
                            name="email"
                            onChange={updateUser}
                            value={email} /><br />
                            
                            <div className="button-layout">
                                <button className="userDetails-submit" onClick={onClickButton}>{buttonLabel}</button>
                            <input className="userDetails-back"  onClick={() => navigate('/employees')} type="submit" value="Back" />

                            </div>

                    </form>

                </>
                
        </div>
    );

}