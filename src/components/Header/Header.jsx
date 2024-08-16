import React from 'react'
import UserSetTarget from './UserSetTarget'
import { Button } from '../Button/Button.styled'
import * as S from './Header.styled'

function Header({ handleCardAdd }) {
  return (
    <>
      <S.Header>
        <S.Container>
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
              <Button onClick={handleCardAdd}>
                <a href="#popNewCard"> Создать новую задачу</a>
              </Button>

              <UserSetTarget />
            </nav>
          </div>
        </S.Container>
      </S.Header>
    </>
  )
}

export default Header
