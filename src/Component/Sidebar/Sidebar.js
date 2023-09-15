import React from "react";

function Sidebar() {
  return (
    <div className="menu-navigation-container">
    <p >Menu cart</p>
      <nav>
        <ul>
          <li className="menu-item">Breakfast</li>
          <li className="menu-item">Lunch</li>
          <li className="menu-item">Burger</li>
          <li className="menu-item">pizza</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
