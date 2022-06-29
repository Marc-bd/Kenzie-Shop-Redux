import { StyledHeader } from "./style";

import { FiLogIn, FiShoppingCart } from "react-icons/fi";
import { showCart } from "../../store/modules/cart/actions";
import { useDispatch } from "react-redux/es/exports";

const ThemeHeader = () => {
  return (
    <StyledHeader>
      <h1>Kenzie Shop</h1>
      <div>
        <h2>
          <FiShoppingCart /> <span> Carrinho </span>
        </h2>
        <button>
          {" "}
          <FiLogIn />
          Entrar
        </button>
      </div>
    </StyledHeader>
  );
};

export default ThemeHeader;
