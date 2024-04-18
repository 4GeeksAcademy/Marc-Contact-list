import React, { useState } from "react";
import { Link } from "react-router-dom";

export const AddContact = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  return (
    <>
      <div className="container">
        <div className="mt-5">
          <label className="form-label d-flex text-start">
            <i
              className="fa fa-user bigicon mx-2"
              style={{ color: "#B197FC", fontSize: 24 }}
            ></i>
            Full Name
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="full Name"
            value={nombre}
            onChange={e=> setNombre(e.target.value)}
          />
        </div>
        <div className="my-3">
          <label className="form-label d-flex text-start">
            <i
              className="fas fa-envelope mx-2"
              style={{ color: "#B197FC", fontSize: 24 }}
            ></i>
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            value={correo}
          />
        </div>
        <div className="my-3">
          <label className="form-label d-flex text-start">
            <i
              className="fas fa-phone-square mx-2"
              style={{ color: "#B197FC", fontSize: 24 }}
            ></i>
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="+34-666-66-66-66"
            value={telefono}
          />
        </div>
        <div className="my-3">
          <label className="form-label d-flex text-start">
            <i
              className="fas fa-map-marker-alt mx-2"
              style={{ color: "#B197FC", fontSize: 24 }}
            ></i>
            Address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Address"
            value={direccion}
          />
        </div>
      </div>
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </>
  );
};
