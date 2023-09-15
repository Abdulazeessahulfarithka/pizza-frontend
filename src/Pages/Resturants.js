

import React, { useState, useEffect } from "react";
import AppLayout from "../Layouts/AppLayout";
import Sidebar from "../Component/Sidebar/Sidebar";
import ResturantCard from "../ResturantCard/ResturantCard";


function Resturants() {
  const [resturants, setResturants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5002/api/user/getAllResturant").then((response) =>
      response.json().then((result) => {
        if (result.data.length > 0) {
          setResturants(result.data);
        }
      })
    );
  }, []);
  return (
    <AppLayout>
      <Sidebar />
      <main className="main-container">
        MainArea
        {resturants.length > 0 ? (
          resturants.map((data, index) => (
            <ResturantCard key={index} data={data} />
          ))
        ) : (
          <p>no resturants found</p>
        )}
      </main>
      <div className="cart-container">Cart</div>
    </AppLayout>
  );
}

export default Resturants;
