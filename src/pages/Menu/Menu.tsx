import Headling from "../../components/Headling/Headling";
import Search from "../../components/Search/Search";
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <>
      <div className={styles["head"]}>
        <Headling>Our menu</Headling>
        <Search />
      </div>
    </>
  );
};

export default Menu;
