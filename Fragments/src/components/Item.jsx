import style from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li className={`${style.foodItem} list-group-item ${bought && "active"}`}>
      <span className={style.foodSpan}>{foodItem}</span>
      <button
        className={`${style.itemBtn} btn btn-success`}
        onClick={handleBuyButton}>
        Buy
      </button>
    </li>
  );
};

export default Item;
