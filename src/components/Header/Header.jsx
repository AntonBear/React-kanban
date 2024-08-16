import React from 'react'
import UserSetTarget from './UserSetTarget'

function Header({ handleCardAdd }) {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__block">
            <div className="header__logo _show _light">
              <a href="" target="_self">
                <img src="images/logo.png" alt="logo" />
              </a>
            </div>
            <div className="header__logo _dark">
              <a href="" target="_self">
                <img src="images/logo_dark.png" alt="logo" />
              </a>
            </div>
            <nav className="header__nav">
              <button
                onClick={handleCardAdd}
                className="header__btn-main-new _hover01"
                id="btnMainNew"
              >
                <a href="#popNewCard"> Создать новую задачу</a>
              </button>

              <UserSetTarget />
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
