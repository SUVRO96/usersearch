import React from "react";
import { useLocation } from "react-router-dom";
import { LoremIpsum } from "react-lorem-ipsum";

const User = () => {
  const location = useLocation();
  console.log(location.state);
  const user = location.state;
  return (
    <div className="row" height="100vh">
      <div className="col-4 bg-info">
        <div>
          <img
            className="border rounded-circle"
            src={user.avatar}
            height="100px"
            width="100px"
            alt="profile"
          />
        </div>
        <h5>
          {user.first_name} {user.last_name}
        </h5>
        <p>{user.email}</p>
      </div>
      <div className="col-8 bg-success">
        <LoremIpsum p={8} />
      </div>
    </div>
  );
};

export default User;
