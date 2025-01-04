import { useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import { cardsSelector } from "./redux/cards/cardsSlice";

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function App() {
  const cards = useSelector(cardsSelector);

  const displayCards = shuffleArray([...cards, ...cards]);

  return (
    <div className="container">
      <div className="content">
        <div className="content-top">
          <div className="content-top-left">
            <span>Point:</span>
            <span>0</span>
          </div>
          <button>Try Again</button>
        </div>
        <div className="content-middle ">
          {displayCards.map((card) => (
            <Card card={card} />
          ))}
        </div>
        <div className="content-footer">
          Bu uygulama{" "}
          <a
            href="https://alperenkursun.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alperen Kurşun
          </a>{" "}
          tarafından yapılmıştır.
        </div>
      </div>
    </div>
  );
}

export default App;
