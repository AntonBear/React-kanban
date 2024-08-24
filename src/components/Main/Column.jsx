import React from 'react'
import Card from '../Card/Card'
import { Main__column, Column__title, Cards } from './Column.styled'

function Column({ title, cardList, theme }) {
  return (
    <Main__column>
      <Column__title>
        <p>{title}</p>
      </Column__title>
      <Cards>
        {cardList.map((card) => (
          <Card
            themeofsite={theme}
            key={card.id}
            id={card.id}
            title={card.title}
            theme={card.theme}
            date={card.date}
          />
        ))}
      </Cards>
    </Main__column>
  )
}

export default Column
