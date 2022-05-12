import styles from "./hamurger-menu.module.css";

interface Props {
  handleClick: () => void;
}

const HamburgerMenu: React.FC<Props> = ({ handleClick }) => {
  const clickHandler = () => {
    handleClick();
  };
  return (
    <div className={styles.menu} onClick={clickHandler}>
      <div className={styles.line}></div>
    </div>
  );
};

export default HamburgerMenu;
