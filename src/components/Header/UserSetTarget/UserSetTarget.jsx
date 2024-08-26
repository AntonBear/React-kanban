import React from 'react'
import { useState } from 'react'
import * as U from './UsetSetTarget.styled'
import { Link } from 'react-router-dom'

function UserSetTarget({ toggleTheme, theme }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <U.pop_user href="#user-set-target" onClick={toggleModal}>
        Ivan Ivanov
      </U.pop_user>
      {isModalOpen && (
        <div className="header__pop-user-set pop-user-set" id="user-set-target">
          <a href="">x</a>

          <p className="pop-user-set__name">Ivan Ivanov</p>
          <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
          <div className="pop-user-set__theme">
            <p>Темная тема</p>
            <input
              type="checkbox"
              className="checkbox"
              name="checkbox"
              onChange={toggleTheme}
            />
          </div>
          <button type="button" className="_hover03">
            <Link to="/exit">Выйти</Link>
            {/* <a href="#popExit">Выйти</a> */}
          </button>
        </div>
      )}
    </>
  )
}

export default UserSetTarget
