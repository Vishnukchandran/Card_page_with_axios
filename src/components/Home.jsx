import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  // Get the data from API using axios
  const fetchData = async () => {
    await axios
      .get("https://65d636cdf6967ba8e3bdb903.mockapi.io/api/cards")
      .then((res) => setCards(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{margin: "10px"}}>
        {cards.map((item, index) => {
          return (
            <>
              <div key={index}>
                <div className="col">
                  <div className="card">
                    <img
                      src={item.card_image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.card_name}</h5>
                      <p className="card-text">{item.card_description}</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
