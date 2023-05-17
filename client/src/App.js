// import React, { Suspense } from "react"
import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import TopHeader from "./component/TopHeader";
import Imagebar from "./component/Imagebar";
import Mainbar from "./component/mainbar";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollButton from "./Scroll/ScrollButton";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setDefault } from "./reducer/actions/index";

function App() {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  const dispatchData = (data) => {
    dispatch(setDefault(data));
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/food")
      .then((res) => {
        console.log("----------------------");
        console.log(res.data);
        setData(res.data);
        dispatchData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <TopHeader />
      <Imagebar />
      <Mainbar />
      <ScrollButton />
    </Router>
  );
}
document.body.style.overflow = "auto";
export default App;
