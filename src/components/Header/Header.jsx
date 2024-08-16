import React from 'react'
import UserSetTarget from './UserSetTarget'
import * as S from './Header.styled'

function Header({ handleCardAdd }) {
  return (
    <>
      <S.Header>
        <S.Container>
          <S.Header__block>
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
            <S.Header__nav>
              <S.Button onClick={handleCardAdd}>
                <a href="#popNewCard"> Создать новую задачу</a>
              </S.Button>
              <UserSetTarget />
            </S.Header__nav>
          </S.Header__block>
        </S.Container>
      </S.Header>
    </>
  )
}

export default Header
