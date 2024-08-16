import React from 'react'
import { useState } from 'react'

function UserSetTarget() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  

  return (
    <>
      <a
        href="#user-set-target"
        className="header__user _hover02"
        onClick={toggleModal}
      >
        Ivan Ivanov
      </a>
      {isModalOpen && (
        <div className="header__pop-user-set pop-user-set" id="user-set-target">
          <a href="">x</a>
          <p className="pop-user-set__name">Ivan Ivanov</p>
          <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
          <div className="pop-user-set__theme">
            <p>Темная тема</p>
            <input type="checkbox" className="checkbox" name="checkbox" />
          </div>
          <button type="button" className="_hover03">
            <a href="#popExit">Выйти</a>
          </button>
        </div>
      )}
    </>
  )
}

export default UserSetTarget
