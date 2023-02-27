import React from "react";
import Button from "../UI/Button/Button";
import styles from "./AuthBar.module.css";

const AuthBar = () => {
  return (
    <div className={styles.authbar}>
      <Button className={styles.signup}>Регистрация</Button>
      <Button className={styles.login}>Войти</Button>
    </div>
  );
};

export default AuthBar;
