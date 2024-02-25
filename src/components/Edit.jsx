import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Edit = ({ id }) => {
  const navigate = useNavigate();

  const [editData, setEditData] = useState({
    card_name: "",
    card_description: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  // Get the data from API using axios
  const fetchData = async () => {
    await axios
      .get(`https://65d636cdf6967ba8e3bdb903.mockapi.io/api/cards/${id}`)
      .then((res) => setEditData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  //Put the data to API
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://65d636cdf6967ba8e3bdb903.mockapi.io/api/cards/${id}`,
        editData
      )
      .then((res) => setEditData(res.data))
      .catch((err) => {
        console.log(err);
      });
    navigate("/cards");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div style={{ display: "flex", flexDirection: "row", margin: "25px" }}>
          <label>
            Card Name:
            <input
              type="text"
              name="card_name"
              value={editData.card_name}
              onChange={handleChange}
              style={{ marginLeft: "10px" }}
            />
          </label>
          <label>
            Card Description:
            <input
              type="text"
              name="card_description"
              value={editData.card_description}
              onChange={handleChange}
              style={{ marginLeft: "10px" }}
            />
          </label>
          <br />
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
          Save
        </button>
      </form>
    </div>
  );
};

export default Edit;
