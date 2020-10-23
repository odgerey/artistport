import React from 'react';
import Routes from './Routes/Routes.js';
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer'

function App() {
  return (
  <>
  <div style={{height:'100%'}}>
    <Toolbar/>
    <SideDrawer/>
    <Routes/>
    <main style={{marginTop: '64px'}}>
      <p>This is content.</p>
    </main>
  </div>
  </>
  )
}
export default App;

