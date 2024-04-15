import React from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
    return(
        <>
            <li className="list-group-item">
                <div className="row align-items-center">
                <div className="col-3">
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" className="img-fluid rounded-circle"/>
                </div>
                <div className="col-6">
                    <h5>John Doe</h5>
                    <p>johndoe@example.com</p>
                    <p>(123) 456-7890</p>
                    <p>123 Main St, Anytown, USA</p>
                </div>
                <div className="col-3 text-right">
                    <button type="button" className="btn btn-danger float-end"><i className="fas fa-trash-alt"></i></button>
                    <button type="button" className="btn btn-primary  float-end"><i className="fas fa-pencil-alt"></i></button>   
                </div>
                </div>
            </li>
        </>
    )
};

