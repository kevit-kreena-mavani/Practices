import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/Cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItem = items.reduce((curr, items) => {
    return curr + items.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBtnHighlighted(true);
    const Timer = setTimeout(() => {
      setIsBtnHighlighted(false);
    }, 300);

    return () =>{
      clearTimeout(Timer);
    }
  }, [items]);

  const btnClasses = `${styles.button} ${isBtnHighlighted ? styles.bump : ""}`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{numberOfCartItem}</span>
    </button>
  );
};
export default HeaderCartButton;
