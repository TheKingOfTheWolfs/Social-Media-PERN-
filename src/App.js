import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Container from "./components/container/Container";

// import Navbar from "./components/navbar/Navbar";


function App(props) {
  return (
    <>
        {/* {<Switch> } */}
          <Navbar />
          <Container/>
        {/* { </Switch> } */}
    </>
  );
}

export default App;