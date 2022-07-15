import { uiActions } from "./ui-slice";
import { cartACtion } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-cart-8ac82-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error(" Could not fetch cart data");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartACtion.replaceCart({
        items : cartData.items || [] , 
        totalQuantity : cartData.totalQuantity
      }));
    } catch (error) {
      dispatch(
        uiActions.ShowNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.ShowNotification({
        status: " pending ",
        title: "sending ",
        message: "Sending cart data!",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-cart-8ac82-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending Data cart failed ! ");
      }
    };
    try {
      await sendRequest();

      dispatch(
        uiActions.ShowNotification({
          status: " success",
          title: "Success! ",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.ShowNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
