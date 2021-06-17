import classes from "./Navbar.module.css";

import { useState } from "react";

import Login from "./Login";

function Navbar(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className={classes.header}>
      <img src="./pictures/box.svg" className={classes.img}></img>
      <form>
        <input></input>
      </form>
      <Login />
    </div>
  );
}

export default Navbar;