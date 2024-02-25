import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cards = ({ setId }) => {
  const [cards, setCards] = useState([]);
  const [deleteData, setDeleteData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [deleteData]);

  // get the data from the API using axios
  const fetchData = async () => {
    await axios
      .get("https://65d636cdf6967ba8e3bdb903.mockapi.io/api/cards")
      .then((res) => setCards(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  // handle the edit and navigate the page
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  //handle the delete on API using axios
  const handleDelete = async (id) => {
    await axios
      .delete(`https://65d636cdf6967ba8e3bdb903.mockapi.io/api/cards/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate("/create");
          }}
          style={{
            margin: "30px",
            borderRadius: "5px",
            backgroundColor: "#00C853",
          }}
        >
          Create item
        </button>
      </div>
      <table
        className="table table-hover container"
        style={{
          margin: "5px",
          padding: "10px",
          border: "1px solid black",
          marginLeft: "20px",
        }}
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Edit Item</th>
            <th scope="col">Delete Item</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.card_name}</td>
                  <td>{item.card_description}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleEdit(item.id);
                      }}
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "#FFE0B2",
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item.id)}
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "#FF6D00",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cards;
