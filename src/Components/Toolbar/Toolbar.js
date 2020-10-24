import React from 'react';
import './Toolbar.scss';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar_logo">
        <a href="/"> <img className="photo" src={"https://static.wixstatic.com/media/d4dd4d_1cbc6f024a974132b0d5848f05b27135~mv2.jpg/v1/fill/w_343,h_228,al_c,q_80,usm_0.66_1.00_0.01/BLA_edited.webp"}/></a>
      </div>
      <div className="spacer"/>
      <div className="toolbar_navigation_items">
        <ul>
          <li><a href="/Biography">Biography</a></li>
          <li><a href="/Overview">Overview</a></li>
          <li><a href="/Services">Services</a></li>
        </ul>
      </div>
    </nav>
  </header>
); 

export default toolbar;