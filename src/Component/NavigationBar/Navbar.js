import React from 'react';
import './Navbar.css';
import TemporaryDrawer from '../Drawer';
import logo from './logo.png'
const Navbar = ({setCategory}) => {
	return(
		<div className="nav">
		<div className = "icon"><TemporaryDrawer setCategory={setCategory} /></div>
		<img src={logo} alt="ashik" id="logo" height='60%' style={{cursor:"pointer",alignItems:"center" }} />
		</div>
		);
}
export default Navbar;