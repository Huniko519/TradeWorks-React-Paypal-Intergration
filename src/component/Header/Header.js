import React from "react";
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function HeaderComponent(){
	return(
		<section className="headerbg text-center p-3">
			<Container>
				<Link to="/"><img src={logo} className="logo pt-1" alt="logo" /></Link>
			</Container>
		</section>
	)
}