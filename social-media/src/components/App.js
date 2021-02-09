import React from "react";
import Header from "./Header"
import Dashboard from "./Dashboard"
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <React.Fragment>
      <Header />
      <Dashboard />
    </React.Fragment>
  );
}

export default App;
