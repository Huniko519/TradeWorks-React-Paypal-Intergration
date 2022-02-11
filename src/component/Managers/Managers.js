import React from "react";
import bob from '../../assets/img/bob.png';
import chris from '../../assets/img/chris.png';
import { Col } from 'react-bootstrap';

export default function ManagersComponent(props){
	return(
		<Col  xl={6} md={12} className="">
			<div>
		    <img src={props.name==='bob'?bob:chris} className="imgmanager" alt="phone" />
				<p className="h2 font-weight-bold pb-3 text-primary mt-3">{props.title}</p>
				<p className="h6 text-uppercase  text-white font-weight-bold mb-4">{props.content}</p>
			</div>
		</Col>
	)
}