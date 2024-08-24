import Router from './router/routes'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global.ts'

// import AuthProvider from 'react-auth-kit';
// import createStore from 'react-auth-kit';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </>
  )
}