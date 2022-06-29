import { useDispatch } from "react-redux";
import { products } from "../../data/database";
import { addToCartThunk } from "../../store/modules/cart/thunks";
import { StyledCard, StyledList } from "./style";

const CardProduct = () => {
  const dispatch = useDispatch();

  const descriptionLimit = (description) => {
    if (description.length > 150) {
      const string = description.slice(0, 150);
      return string.concat("...");
    }
    return description;
  };
  return (
    <StyledList>
      {products.map((product) => (
        <StyledCard key={product.id}>
          <div className="containerImgProduct">
            <img src={product.img} alt={`imagem produto ${product.img}`} />
          </div>
          <div className="containerInfoProduct">
            <h3>{product.name}</h3>
            <p>{descriptionLimit(product.description)}</p>
            <h4>
              R$: <span>{product.price}</span>
            </h4>
          </div>
          <button
            id={product.id}
            onClick={() => dispatch(addToCartThunk(product))}
          >
            Adicionar ao Carrinho
          </button>
        </StyledCard>
      ))}
    </StyledList>
  );
};

export default CardProduct;
