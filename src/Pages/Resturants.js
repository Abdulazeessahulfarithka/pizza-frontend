import React, { useState, useEffect } from "react";

import ResturantCard from "../ResturantCard/ResturantCard";
import { useNavigate } from "react-router-dom";

function Resturants() {
  const [resturants, setResturants] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5002/api/user/getAllResturant").then((response) =>
      response.json().then((result) => {
        if (result.data.length > 0) {
          setResturants(result.data);
        }
      })
    );
  }, []);
  function handleResturantSelect(id) {
    if (id) {
      navigate(`/resturant/${id}`);
    }
  }
  return (
    <main className="main-container">
      MainArea
      {resturants.length > 0 ? (
        resturants.map((data, index) => (
          <ResturantCard
            key={index}
            data={data}
            handleClick={handleResturantSelect}
          />
        ))
      ) : (
        <p>no resturants found</p>
      )}
    </main>
  );
}

export default Resturants;
