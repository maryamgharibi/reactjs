import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import { useContext } from "react";
import CartContext from "../../store/Cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const onAddToCart = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{props.price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={onAddToCart} />
      </div>
    </li>
  );
};
export default MealItem;
