import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Button from "../../components/Button/Button";
import cn from "classnames";

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
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(styles["link"], { [styles.active]: isActive })
            }
          >
            <img src="../../../public/menu.svg" alt="menu" />
            Menu
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn(styles["link"], { [styles.active]: isActive })
            }
          >
            <img src="../../../public/bag.svg" alt="cart" />
            Cart
          </NavLink>
        </div>

        <Button className={styles["exit"]}>Logout</Button>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
