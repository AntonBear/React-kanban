import styled from 'styled-components'



export const Button = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  &:hover {
    background-color: #33399b;
  }

  a {
    color: #ffffff;
    text-decoration: none; // Убираем подчеркивание ссылки
  }
`


export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`
export const Container = styled.header`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`

export const Header__block = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`
export const Header__nav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`


