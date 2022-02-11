import React from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Image, Container } from 'react-bootstrap';
import slide from '../../assets/img/banner-bg.jpg';

export default function AboutComponent(){
	return(
		<section className="py-5">
			<Container>
				<Row>
			    <Col xl={6} md={12}>
			      <Image src={slide} thumbnail />
			    </Col>
			    <Col xl={6} md={12}>
			      <div className="p-5">
			      <h6 className="pb-3">About Tradeworks</h6>
			      <h2 className="pb-2">We operate our banking services in many countries around the world.</h2>
			      <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
			      	<Link to="/about" className="btn btn-outline-warning shadow">About US</Link>
			      </div>
			    </Col>
			  </Row>
			</Container>
		</section>
	)
}