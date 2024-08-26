import React from 'react'
import { useState } from 'react'
import { Pop_user } from './UsetSetTarget.styled'
import { Link } from 'react-router-dom'

function UserSetTarget({ toggleTheme }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <Pop_user onClick={toggleModal}>
        Ivan Ivanov
      </Pop_user>
      {isModalOpen && (
        <div className="header__pop-user-set pop-user-set" id="user-set-target">
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
          </button>
        </div>
      )}
    </>
  )
}

export default UserSetTarget
