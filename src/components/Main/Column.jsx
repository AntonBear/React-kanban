import React from 'react'
import Card from '../Card/Card'
import * as C from './Column.styled'

function Column({ title, cardList }) {
  return (
    <C.Main__column>
      <C.Column__title>
        <p>{title}</p>
      </C.Column__title>
      <C.Cards>
        {cardList.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            theme={card.theme}
            date={card.date}
          />
        ))}
      </C.Cards>
    </C.Main__column>
  )
}

export default Column
