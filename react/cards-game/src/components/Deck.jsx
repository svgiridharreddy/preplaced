
import {useEffect,useState} from 'react';
import Card from './Card';


const Deck = () => {
  const [deckOfCards, setDeckOfCards] = useState([])
  const [drawnCards,setDrawnCards] = useState([]);
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  const symbols = ["spade", "diamond", "club", "heart"]

  useEffect(() => {
    const cards = getDeckOfCards();
    const shuffledCards = shuffleCards(cards)
    setDeckOfCards(shuffledCards);
  },[])

  const drawRandomCards = () => {
    let cards = deckOfCards.sort(() => Math.random() - Math.random()).slice(0,5);
    cards = drawnCards.concat(cards)
    setDrawnCards(cards);
  }

  const shuffleCards = (cards) => {
    for(let i = 0; i < cards.length-1; i++){
      const j= Math.floor(Math.random() * (i+1));
      [cards[i],cards[j]] = [cards[j], cards[i]]
    }
    return cards
  }

  const getDeckOfCards = () => {
    let cards = []
    for(let i = 0; i < symbols.length; i++){
      for(let j=0; j < values.length; j++){
        let card = {value: values[j], symbol: symbols[i]}
        cards.push(card)
      }
    }
    return cards
  }

  const renderCards = () => {
    return (
      deckOfCards && deckOfCards.map((card,index) => 
        <>
          <li key={`${index}_${card.symbol}`}><Card value={card.value} symbol={card.symbol} /></li>
        </>
      )
    )
  }


  return (
    <>
      <section className="game">
        <h1>Card Game</h1>
        <p>Total Cards: {deckOfCards.length} </p>
        <p> Click on button to generate 5 random cards</p>
        <button className="btn get-cards" onClick={drawRandomCards}>Get Cards</button>
        <ul className="deck" >
          {renderCards()}
        </ul>
        <span> Total pulled: {drawnCards.length}</span>
      <button className="btn reset">Reset</button>

      </section>
    </>
  )
}
export default Deck;