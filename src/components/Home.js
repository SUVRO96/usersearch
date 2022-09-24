import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const errorRef = useRef();
  const [id, setId] = useState(0);
  const navigate = useNavigate();

  const searchFn = async () => {
    const userid = parseInt(id);
    if (userid < 1 || userid > 12) {
      errorRef.current.textContent = "id should be between 1 to 12";
    } else {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      errorRef.current.textContent = "";
      const userDetails = response.data.data;
      navigate(`/user/${userid}`, { state: userDetails });
    }
  };
  return (
    <div className="container">
      <h1>User Search</h1>
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Enter userid"
          onChange={e => {
            setId(e.target.value);
          }}
          value={id}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={searchFn}
        >
          Search
        </button>
      </div>
      <p className="text-danger" ref={errorRef}></p>
    </div>
  );
};

export default Home;
