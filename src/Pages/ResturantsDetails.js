import React, { useState, useEffect } from "react";
import AppLayout from "../Layouts/AppLayout";
import Sidebar from "../Component/Sidebar/Sidebar";
import ResturantCard from "../ResturantCard/ResturantCard";
import {  useParams } from "react-router-dom";
import ProductCard from "../Component/ProductCard/ProductCard";

function ResturantsDetails() {
  const { id } = useParams();
 
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5002/api/food/getAllFood/${id}`).then(
        (response) =>
          response.json().then((result) => {
            if (result.data.length > 0) {
              setFoods(result.data);
            }else{

            }
          })
      );
    }
  }, []);
  return (
    <AppLayout>
      <Sidebar />
      <main className="main-container">
        MainArea
        {foods.length > 0 ? (
          foods.map((data, index) => <ProductCard key={index} data={data} />)
        ) : (
          <p>no resturants found</p>
        )}
      </main>
      <div className="cart-container">Cart</div>
    </AppLayout>
  );
}

export default ResturantsDetails;
