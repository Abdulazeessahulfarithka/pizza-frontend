import "./App.css";
import Header from "./Component/Header/Header";
import { Route, Routes } from "react-router-dom";
import Resturants from "./Pages/Resturants";
import ResturantsDetails from "./Pages/ResturantsDetails";
import Cart from "./Pages/Cart";
import Login from "./Component/Login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/resturants" Component={Resturants} />
        <Route path="/resturant/:id" Component={ResturantsDetails} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </div>
  );
}

export default App;
