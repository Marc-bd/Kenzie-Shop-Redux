import CardProduct from "../CardProduct";
import Cart from "../Cart";
import { ThemeMain } from "./style";

const Main = () => {
  return (
    <ThemeMain>
      <CardProduct />
      <Cart />
    </ThemeMain>
  );
};

export default Main;
