import React from 'react'
// import * as C from './Card.styled.js'
import {
  Card__btn,
  Card__content,
  Card__date,
  Card__group,
  Card__theme,
  Card__title,
  Cards__card,
  Cards__item,
  Text_theme,
  StyledSvg,
} from './Card.styled.js'

function Card({ title, theme, date, themeofsite }) {
  let themeColor
  switch (theme) {
    case 'Web Design':
      themeColor = '_orange'
      break
    case 'Research':
      themeColor = '_green'
      break
    case 'Copywriting':
      themeColor = '_purple'
      break
    default:
      themeColor = '_green'
  }
  console.log(themeofsite)

  return (
    <Cards__item>
      <Cards__card>
        <Card__group>
          <Card__theme $themeColor={themeColor} $themeofsite={themeofsite}>
            <Text_theme $themeColor={themeColor} $themeofsite={themeofsite}>
              {theme}
            </Text_theme>
          </Card__theme>
          <a href="#popBrowse" target="_self">
            <Card__btn>
              <div></div>
              <div></div>
              <div></div>
            </Card__btn>
          </a>
        </Card__group>
        <Card__content>
          <a href="" target="_blank">
            <Card__title>{title}</Card__title>
          </a>
          <Card__date>
            <StyledSvg>
              <g clipPath="url(#clip0_1_415)">
                <path
                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_415">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </StyledSvg>
            <p>{date}</p>
          </Card__date>
        </Card__content>
      </Cards__card>
    </Cards__item>
  )
}

export default Card
