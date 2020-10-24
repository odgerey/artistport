import React, { Component } from 'react';
import Routes from './Routes/Routes.js';

import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';



class App extends Component {

 state = {
    sideDrawerOpen: false,
  }
  
  drawerToggleClickHandler = () => {
   this.setState(prevState => {
     return { sideDrawerOpen: !prevState.sideDrawerOpen}
   });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }
  
  render() {
  
    let backdrop;
    let sideDrawer;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
      sideDrawer = <SideDrawer/>;
    }
    return (
    <div style={{height:'100%'}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}

     <Routes/>
      <main style={{marginTop: '64px'}}>
        <p>This is content.</p>
      </main>
    </div>
    )
  }
}

export default App


