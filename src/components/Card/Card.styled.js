import styled from 'styled-components'
import { darkTheme } from '../../ThemeProvider.styled.js'

export const topicStyles = {
  _purple: {
    backgroundColor: '#e9d4ff',
    color: '#9a48f1',
  },
  _orange: {
    backgroundColor: '#ffe4c2',
    color: '#ff6d00',
  },
  _green: {
    backgroundColor: '#b4fdd1',
    color: '#06b16e',
  },
  _gray: {
    backgroundColor: '#94a6be',
    color: '#ffffff',
  },
}

export const textTheme = styled.p`
  color: ${({ $themeColor, $themeofsite }) => {
    console.log($themeofsite)
    const colorFromTopic = topicStyles[$themeColor]?.color // Получаем цвет из topicStyles
    const colorFromTheme =
      $themeofsite == 'dark' ? darkTheme.card.p[$themeColor].color : false // Цвет из темы, если она темная
    return colorFromTheme || colorFromTopic // Возвращаем первый найденный цвет или дефолтный
  }};
`

export const Card__theme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $themeColor, $themeofsite }) => {
    const colorCard__theme =
      topicStyles[$themeColor]?.backgroundColor || '#b4fdd1'
    const colorFromTheme =
      $themeofsite == 'dark'
        ? darkTheme.card.p[$themeColor].backgroundColor
        : false
    return colorFromTheme || colorCard__theme
  }};

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`

export const Card__group = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Cards__item = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`

export const Cards__card = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${(props) => props.theme.card.backgroundColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`

export const Card__content = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`
export const Card__date = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`

export const StyledSvg = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 13 13',
  fill: 'none',
})`
  width: 13px;
  height: 13px;
`
export const Card__btn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`

export const Card__title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${(props) => props.theme.card.color};
  margin-bottom: 10px;
`
