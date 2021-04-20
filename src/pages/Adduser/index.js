import React, { useState } from "react";
import Input from "../../components/atom/Input";
import Button from "../../components/atom/Button";
import { Link } from "react-router-dom";
import Axios from "axios";
import Navigation from "../../components/molecules/Navigation";

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar] = useState("https://source.unsplash.com/random");

  const handleSubmit = () => {
    const AddUser = {
      avatar: avatar,
      first_name: firstName,
      last_name: lastName,
      email: email,
    };
    Axios.post("http://localhost:3000/users", AddUser);
  };

  return (
    <div className="container">
      <NavBar />
      <h3 className="mt-5">Add new user</h3>
      <Input
        className="form-control"
        label="First Name"
        placeholder="Input first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        className="form-control"
        label="Last Name"
        placeholder="Input last name "
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        className="form-control"
        label="Email"
        placeholder="Input email address "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <Link to="/">
        <Button onSubmit={handleSubmit} text="Adduser" />
      </Link>
    </div>
  );
};

export default AddUser;