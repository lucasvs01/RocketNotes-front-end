import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './Routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./styles/global"
import theme from './styles/theme'
import { myContext } from './myContext';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
        <GlobalStyles />
        <myContext.Provider value={{email: "lucasvs01@gmail.com", name: "lucas"}}>
          <Routes />
        </myContext.Provider>
   </ThemeProvider>
  </React.StrictMode>,
)
