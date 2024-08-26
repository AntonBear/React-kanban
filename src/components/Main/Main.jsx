import React from 'react'
import Column from './Column'
import { Container } from '../Header/Header/Header.styled'
import { Main_container, Main__content, Main_block } from './Main.styled'

function Main({ cards, theme }) {
  console.log(cards)
  const statusList = [
    'Без статуса',
    'Нужно сделать',
    'В работе',
    'Тестирование',
    'Готово',
  ]

  return (
    <>
      <Main_container>
        <Container>
          <Main_block>
            <Main__content>
              {statusList.map((status) => (
                <Column
                  theme={theme}
                  key={status}
                  title={status}
                  cardList={cards.filter((card) => card.status === status)}
                />
              ))}
            </Main__content>
          </Main_block>
        </Container>
      </Main_container>
    </>
  )
}

export default Main
