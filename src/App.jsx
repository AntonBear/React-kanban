import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/PopBrowse/PopBrowse'
import PopExit from './components/PopExit/PopExit'
import PopNewCard from './components/PopNewCard/PopNewCard'
import Wrapper from './components/Wrapper/Wrapper'
import { cardList } from './data'
import { useState, useEffect } from 'react'
import { lightTheme, darkTheme } from './ThemeProvider.styled'
import { ThemeProvider } from 'styled-components'
import { Routes, Route } from 'react-router-dom'

function App() {
  console.log(cardList)
  const [cards, setCards] = useState(cardList)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 0)
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
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Wrapper>
          <Routes>
            <Route path="/exit" element={<PopExit />} />
            <Route path="/new-card" element={<PopNewCard />} />
            <Route path="/pop-browse" element={<PopBrowse />} />
            <Route
              path="/"
              element={
                <>
                  <Header
                    theme={theme}
                    toggleTheme={toggleTheme}
                    handleCardAdd={handleCardAdd}
                  />
                  {isLoading ? (
                    <Main cards={cards} theme={theme} />
                  ) : (
                    <div>Идёт загрузка...</div>
                  )}
                </>
              }
            />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </>
  )
}

export default App
