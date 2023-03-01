import React from 'react';
import './App.css';
import Routers from './routes/routers';
import { ThemeProvider } from '@mui/material/styles'
import theme from './utils/theme/theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routers />
      </ThemeProvider>
    </div>
  );
}

export default App;
