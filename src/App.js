import "./App.css";
import Header from "./Component/Header/Header";

import { Route, Routes } from "react-router-dom";
import Resturants from "./Pages/Resturants";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/resturants" Component={Resturants}></Route>
      </Routes>
    </div>
  );
}

export default App;
