import React from "react";
import { Contact } from "../component/Contact";
import { Link } from "react-router-dom";

export const ListContact = () => {
    return (
        <>
            <div className="container mt-4">
                <h1 className="text-center">Contact List</h1>
                <ul className="list-group">
                    <Contact/>
                </ul>
            </div>
            
			<Link to="/AddContact">
				<button className="btn btn-primary">Check the Context in action</button>
			</Link>
			
        </>
    )
}