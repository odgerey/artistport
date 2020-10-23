import React from 'react';
import Routes from './Routes/Routes.js';
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer.js'
import Backdrop from './Components/Backdrop/Backdrop.js';
function App() {
  return (
  <>
  <div style={{height:'100%'}}>
    <Toolbar/>
    <SideDrawer/>
    <Backdrop/>
    <Routes/>
    <main style={{marginTop: '64px'}}>
      <p>This is content.</p>
    </main>
  </div>
  </>
  )
}
export default App;

