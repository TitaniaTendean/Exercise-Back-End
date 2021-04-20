import React, { useState } from "react";
import Button from "../../components/atom/Button";
import Input from "../../components/atom/Input";

const Registrasi = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    const dataRegister = {
      fullName: fullName,
      username: username,
      email: email,
      phone: phone,
      address: address,
    };
    console.log(dataRegister);
  };

  return (
    <div className="container mt-5">
      <h3>Registrasi</h3>

      <Input
        className="form-control"
        placeholder="Input your full name "
        label="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <Input
        className="form-control"
        placeholder="Input username"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        className="form-control"
        placeholder="Input email address "
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        className="form-control"
        placeholder="Input phone number "
        label="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Input
        className="form-control"
        placeholder="Input address "
        label="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <Button onSubmit={handleSubmit} text="Registrasi" />
    </div>
  );
};

export default Registrasi;