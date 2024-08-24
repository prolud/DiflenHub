import { createGlobalStyle } from 'styled-components'
import { themes } from './themes/themes';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: 400;
    box-sizing: border-box;
  }
  
  body {
    background-color: ${themes.default.neutro_9};
    font-family: "Roboto", sans-serif;
    color: ${themes.default.neutro_0};
  }

  input {
    padding: 0.5rem;
    height: 2rem;
    border-radius: 8px;
  }

  button {
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    height: 2rem;
  }
`;