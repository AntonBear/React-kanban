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

  const [theme, setTheme] = useState('light') // Состояние для переключения тем

  // Функция для переключения темы
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <>
      {/* <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> */}
        <div className="wrapper">
          <PopExit />
          <PopNewCard />
          <PopExit />
          <PopBrowse />
          <Header theme={theme} toggleTheme={toggleTheme} handleCardAdd={handleCardAdd} />
          {isLoading ? <Main cards={cards} /> : <div>Идёт загрузка...</div>}
        </div>
      {/* </ThemeProvider> */}
    </>
  )
}

export default App
