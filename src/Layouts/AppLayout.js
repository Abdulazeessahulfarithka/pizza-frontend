import React from "react";

function AppLayout({ children }) {
  return (
    <div id="app-container" className="app-container">
      {children}
    </div>
  );
}

export default AppLayout;
