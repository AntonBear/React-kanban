import React from 'react'
import Item from './Item'

function Main() {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              <div className="main__column column">
                <div className="column__title">
                  <p>Без статуса</p>
                </div>
                <div className="cards">
                  <Item />
                </div>
              </div>
              <div className="main__column">
                <div className="column__title">
                  <p>Нужно сделать</p>
                </div>
                <div className="cards">
                  <Item />
                </div>
              </div>
              <div className="main__column">
                <div className="column__title">
                  <p>В работе</p>
                </div>
                <div className="cards">
                  <Item />
                </div>
              </div>
              <div className="main__column">
                <div className="column__title">
                  <p>Тестирование</p>
                </div>
                <div className="cards">
                  <Item />
                </div>
              </div>
              <div className="main__column">
                <div className="column__title">
                  <p>Готово</p>
                </div>
                <div className="cards">
                  <Item />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Main
