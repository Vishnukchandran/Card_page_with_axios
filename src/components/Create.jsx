import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [createData, setCreateData] = useState({
    card_name: "",
    card_description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  // post/add the new data to API using axios
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://65d636cdf6967ba8e3bdb903.mockapi.io/api/cards", createData)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
    navigate("/cards");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div style={{ display: "flex", flexDirection: "row", margin: "25px" }}>
          <label style={{ marginBottom: "10px" }}>
            Card Name:
            <input
              type="text"
              name="card_name"
              value={createData.card_name}
              onChange={handleChange}
              style={{ marginLeft: "10px" }}
            />
          </label>
          <label style={{ marginLeft: "15px" }}>
            Card Description:
            <input
              type="text"
              name="card_description"
              value={createData.card_description}
              onChange={handleChange}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <button
          type="submit"
          style={{
            marginLeft: "15px",
            borderRadius: "5px",
            backgroundColor: "#00C853",
            marginTop: "auto",
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
