import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette:{
    primary: {
      main: '#7980FF',
      dark: '#9399ff',
      light: '#ededf4',
      contrastText: '#191919',
      topmenuText: '#fff',
      bodyColor:'#e5e4e4',
      footerBackground: '#333333',
      skyblue: '#64BEF1'
    }
  }
  
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
