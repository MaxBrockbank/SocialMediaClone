import React from "react";

function Searchbar(){
  const BarStyling = {width:"20rem",background:"transparent", border:"1px solid grey", padding:"0.5rem", float:"right", margin: "10px"}
  return (
    <input 
      style={BarStyling}
      key="random1"
      // value={keyword}
      placeholder={"search"}
      // onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default Searchbar;