import React from "react";
import { Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function PricingComponent(props){
	return(
		<Col className="pb-3">
			<div className="bg-light text-dark p-5 roundedprice shadow">
				<h1 className="h6 text-uppercase font-weight-bold mb-4">{props.title}</h1>
				<h2 className="h1 font-weight-bold pb-3">${props.price}<span className="text-small font-weight-normal ml-2">/ mo</span></h2>
				<Link to="/checkout" className="btn btn-outline-dark btn-block p-2 shadow">${props.price}<span className="text-small font-weight-normal ml-2">/ mo</span></Link>
			</div>
		</Col>
	)
}