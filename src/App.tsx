import Router from './router/routes'
import { GlobalStyle } from './styles/global.ts'

// import AuthProvider from 'react-auth-kit';
// import createStore from 'react-auth-kit';


export default function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  )
}