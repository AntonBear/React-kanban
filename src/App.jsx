import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/PopBrowse'
import PopExit from './components/PopExit'
import PopNewCard from './components/PopNewCard'
import { cardList } from './data'
import { useState, useEffect } from 'react'

function App() {
  console.log(cardList)
  const [cards, setCards] = useState(cardList)
  const [isLoading, setIsLoading] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 2000)
  }, [])

  const handleCardAdd = () => {
    const newCard = {
      id: Date.now(), // Генерируем уникальный id
      theme: 'Новая тема', // Можно добавить выбор темы
      title: 'Новая задача',
      date: new Date().toLocaleDateString(),
      status: 'Без статуса',
    }

    setCards([newCard, ...cards]) // Добавляем новую карточку в начало списка
  }



  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopExit />
        <PopBrowse />
        <Header handleCardAdd={handleCardAdd} />
        {isLoading ? <Main cards={cards} /> : <div>Идёт загрузка...</div>}
      </div>
    </>
  )
}

export default App
