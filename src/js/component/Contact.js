import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contact = () => {
    const { store, actions } = useContext(Context);
    const [nombre, setNombre] = useState(store.contactos[0].nombre)
    const [correo, setCorreo] = useState(store.contactos[0].correo)
    const [telefono, setTelefono] = useState(store.contactos[0].telefono)
    const [direccion, setDireccion] = useState(store.contactos[0].direccion)
    

    return(
        <>
            <li className="list-group-item">
                <div className="row align-items-center">
                <div className="col-3">
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" className="img-fluid rounded-circle"/>
                </div>
                <div className="col-6">
                    <h5>{nombre}</h5>
                    <p>{correo}</p>
                    <p>{telefono}</p>
                    <p>{direccion}</p>
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

