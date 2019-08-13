import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import MarketCap from "./MarketCap";
import Footer from "./Footer";
import "./index.css";
 
ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);

ReactDOM.render(
  <MarketCap/>, 
  document.getElementById("price")
);

ReactDOM.render(
  <Footer/>, 
  document.getElementById("footer")
);