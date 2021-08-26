import react from 'react';
import './Footer.css';
import logo from './logo-foot.png'; 

const Footer = () => {
	return(
	<div className="footer-main">
	<img id="logo-foot" src= {logo} />
	<div className="text">
		inshorts clone by <a href="https://www.linkedin.com/signup" target="blank">Ashik Hameed</a>
		<br />
	<hr style={{width:'100%'}} />
		@COPYRIGHT 2021
	<a href="https://www.instagram.com/" target="blank">
	<i class="fab fa-instagram"></i>
	</a>
	<a href="https://twitter.com/?lang=en" target="blank">
	<i class="fab fa-twitter"></i>
	</a>
	<a href="https://www.whatsapp.com/?lang=en" target="blank">
	<i class="fab fa-whatsapp"></i>
	</a>
	</div>
	</div>
		);
}
export default Footer; 