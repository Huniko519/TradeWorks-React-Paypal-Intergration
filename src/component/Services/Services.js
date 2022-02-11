import React from "react";
import phone from '../../assets/img/phone.png';
import { Col } from 'react-bootstrap';

export default function ServicesComponent(props){
	return(
		<Col  xl={4} md={12} className="pb-3 mt-4">
			<div className="p-2">
		    <img src={phone} className="imgservice pb-3" alt="phone" />
				<p className="h2 font-weight-bold pb-3 text-primary">{props.title}</p>
				<p className="h5 text-uppercase  text-white font-weight-bold mb-4">{props.content}</p>
			</div>
		</Col>
	)
}