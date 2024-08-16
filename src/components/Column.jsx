import React from 'react'
import Card from './Card'

function Column({ title, cardList }) {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            theme={card.theme}
            date={card.date}
          />
        ))}
      </div>
    </div>
  )
}

export default Column
