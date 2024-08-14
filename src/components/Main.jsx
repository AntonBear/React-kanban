import React from 'react'
import Card from './Card'
import Column from './Column'

function Main() {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              <Column />
              <Column />
              <Column />
              <Column />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Main
