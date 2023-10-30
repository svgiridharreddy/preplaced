const Card = ({value, symbol}) => {
  return (
    <>
      <section className="card">
        <img className={`symbol ${symbol}`}/>
        <span className="value">{value}</span>
      </section>
    </>
  )
}

export default Card;