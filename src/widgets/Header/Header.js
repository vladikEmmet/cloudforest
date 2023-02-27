import AuthBar from "../../components/AuthBar/AuthBar";
import logo from "../../assets/logo.jpg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Cloudforest logo" />
        <h1>Cloud Forest</h1>
      </div>
      <AuthBar />
    </div>
  );
};

export default Header;
