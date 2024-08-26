import React from 'react'
import UserSetTarget from './UserSetTarget/UserSetTarget'
import {
  Header__block,
  Header__nav,
  Button,
  Container,
  Header_wrapper,
} from './Header.styled'
import { Link } from 'react-router-dom'

function Header({ handleCardAdd, toggleTheme, theme }) {
  return (
    <>
      <Header_wrapper>
        <Container>
          <Header__block>
            <div className="header__logo _show _light">
              <Link to="/">
                <img src="images/logo.png" alt="logo" />
              </Link>
            </div>
            <div className="header__logo _dark">
              <a href="" target="_self">
                <img src="images/logo_dark.png" alt="logo" />
              </a>
            </div>
            <Header__nav>
              <Button onClick={handleCardAdd}>
                <Link to="/new-card">Создать новую задачу</Link>
                {/* <a href="#popNewCard"> Создать новую задачу</a> */}
              </Button>
              <UserSetTarget toggleTheme={toggleTheme} theme={theme} />
            </Header__nav>
          </Header__block>
        </Container>
      </Header_wrapper>
    </>
  )
}

export default Header
