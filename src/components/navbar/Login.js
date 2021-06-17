import { useState } from "react";

import classes from "./Login.module.css";

function Login(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <button className={classes.login} onClick={openModalHandler}>
        Log in
      </button>
    </div>
  );
}

export default Login;