// import topicStyles from './components/Card/Card.styled'

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  // Другие стили светлой темы
  card: {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  header: { backgroundColor: '#ffffff', color: '#565eef' },
  wrapper: { backgroundColor: '#f1f1f1' },
  main: { backgroundColor: '#eaeef6' },
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',

  card: {
    backgroundColor: '#20202C',
    color: '#ffffff',
    p: {
      _purple: {
        backgroundColor: '#9A48F1',
        color: '#E9D4FF',
      },
      _orange: {
        backgroundColor: '#FF6D00',
        color: '#FFE4C2',
      },
      _green: {
        backgroundColor: '#06B16E',
        color: '#B4FDD1',
      },
      _gray: {
        backgroundColor: '#94a6be',
        color: '#ffffff',
      },
    },
  },
  header: { backgroundColor: '#20202C', color: '#ffffff' },
  wrapper: { backgroundColor: '#151419' },
  main: { backgroundColor: '#151419' },
}
