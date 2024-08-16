import React from 'react'
import * as C from './Card.styled.js'

function Card({ id, title, theme, date }) {
  return (
    <C.Cards__item>
      <C.Cards__card>
        <C.Card__group>
          <C.Card__theme>
            <p className="_orange">{theme}</p>
          </C.Card__theme>
          <a href="#popBrowse" target="_self">
            <C.Card__btn>
              <div></div>
              <div></div>
              <div></div>
            </C.Card__btn>
          </a>
        </C.Card__group>
        <C.Card__content>
          <a href="" target="_blank">
            <C.Card__title>{title}</C.Card__title>
          </a>
          <C.Card__date>
            <C.StyledSvg>
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
            </C.StyledSvg>
            <p>{date}</p>
          </C.Card__date>
        </C.Card__content>
      </C.Cards__card>
    </C.Cards__item>
  )
}

export default Card
