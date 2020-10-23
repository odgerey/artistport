import React from 'react';
import Routes from './Routes/Routes.js';
import Toolbar from './Components/Toolbar/Toolbar';

function App() {
  return (
  <>
  <Toolbar/>
  <Routes/>
  <main style={{marginTop: '64px'}}>
    <p>This is content.</p>
  </main>
  </>
  )
}
export default App;

