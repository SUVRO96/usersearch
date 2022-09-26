import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LoremIpsum } from "react-lorem-ipsum";

const User = () => {
  const location = useLocation();
  console.log(location.state);
  const user = location.state;
  return (
    <div className="container row" height="100vh">
      <nav id="navbar">
        <ul>
          <li>Photo</li>
          <li>Name</li>
          <li>Email</li>
          <li>Description</li>
        </ul>
      </nav>
      <div id="user_details text-center">
        <img id="photo" src={user.avatar} alt="profile_pic" />
        <h3 id="name">
          Name: {user.first_name} {user.last_name}
        </h3>
        <p id="email">Email: {user.email}</p>
      </div>
    </div>
  );
};

export default User;
