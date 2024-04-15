import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Button from "../../components/Button/Button";

const Layout = () => {
  return (
    <div className={styles["layout"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["user"]}>
          <img src="../../../public/avatar.png" alt="avatar" />
          <div className={styles["name"]}>User Name</div>
          <div className={styles["email"]}>useremail@mail.com</div>
        </div>
        <div className={styles["menu"]}>
          <Link to="/" className={styles["link"]}>
            <img src="../../../public/menu.svg" alt="menu" />
            Menu
          </Link>
          <Link to="/cart" className={styles["link"]}>
            <img src="../../../public/bag.svg" alt="cart" />
            Cart
          </Link>
        </div>

        <Button className={styles["exit"]}>Logout</Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
