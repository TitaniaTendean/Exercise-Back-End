import React, { useState, useEffect } from "react";
import Navigation from "../../components/molecules/Navigation";
import { Link } from "react-router-dom";
import Axios from "axios";
import Carduser from "../../components/molecules/Carduser";
import Button from "../../components/atom/Button";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3000/users").then((res) => setUsers(res.data));
  }, [users]);

  return (
    <div className="container">
      <Navigation />
      <h3>Dashboard</h3>
      <hr />
      <br />
      <Link to="/AddUser">
        <Button text="Add new user" />
      </Link>

      <div className="row align-items-start">
        {users.map((item) => (
          <Card
            avatar={item.avatar}
            fullName={`${item.first_name} ${item.last_name}`}
            email={item.email}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;