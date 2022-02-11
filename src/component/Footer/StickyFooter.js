import React from "react";
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';

export default function StickyFooterComponent(){
	return(
		<section className="stickyfooter">
			<Container>
				<Row>
					<Col xl={6} md={6} className="f-logo">
						<Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
					</Col>
					<Col xl={3} md={3} sm={6} xs={6}>
							<Link to="/signup" className="btn btn-warning shadow btnfjoin p-2">JOIN NOW</Link>
					</Col>
					<Col xl={3} md={3} sm={6} xs={6}>
							<Link to="/login" className="btn btn-outline-light shadow btnfjoin p-2">LOGIN</Link>
					</Col>
				</Row>
			</Container>
		</section>
	)
}