import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  compareOpenItemsSelector,
  isLockedSelector,
  compare,
  unlock,
} from "../../redux/cards/cardsSlice";

function Card({ card }) {
  const [isRotate, setIsRotate] = useState(false);
  const dispatch = useDispatch();

  const compareOpenItems = useSelector(compareOpenItemsSelector);
  const isLocked = useSelector(isLockedSelector);

  useEffect(() => {
    if (isRotate) {
      const timer = setTimeout(() => {
        setIsRotate(false);
        dispatch(unlock());
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isRotate, dispatch]);

  const handleClick = (id) => {
    if (!isLocked) {
      setIsRotate(true);
      dispatch(compare(id));
    }
  };

  return (
    <button
      key={card.id}
      className={`card ${isRotate ? "rotate" : ""} ${
        compareOpenItems.includes(card.id) ? "card-open" : ""
      }`}
      onClick={() => handleClick(card.id)}
      disabled={isLocked && !compareOpenItems.includes(card.id)}
    >
      {(isRotate || compareOpenItems.includes(card.id)) && (
        <img src={card.url} alt={`Card`} />
      )}
    </button>
  );
}

export default Card;
