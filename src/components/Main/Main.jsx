import React from 'react'
import Column from './Column'
import * as H from '../Header/Header.styled'
import * as M from './Main.styled'

function Main({ cards }) {
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
      <M.Main>
        <H.Container>
          <M.Main_block>
            <M.Main__content>
              {statusList.map((status) => (
                <Column
                  key={status}
                  title={status}
                  cardList={cards.filter((card) => card.status === status)}
                />
              ))}
            </M.Main__content>
          </M.Main_block>
        </H.Container>
      </M.Main>
    </>
  )
}

export default Main
