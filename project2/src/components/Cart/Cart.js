import { useContext } from "react";
import CartContext from "../../Store/Cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };

  const TotalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItem = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove = {cartItemRemoveHandler.bind(null , item.id)}
          onAdd = {cartItemAddHandler.bind(null , item )}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{TotalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button-cancel"]} onClick={props.onClose}>
          Cancel
        </button>
        {hasItems && <button className={styles["button-order"]}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
