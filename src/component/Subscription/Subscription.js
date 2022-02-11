import React from "react";
import quotesLeft from '../../assets/img/icon-quotesLeft.svg';
import { Col, Row } from 'react-bootstrap';

export default function SubscriptionComponent(props){
	return(
		<Col  xl={6} md={12} className="pb-3 mt-4">
			<div className="p-2">
				<Row>
					<Col xl={2} md={2} sm={2} xs={3}>
				    <img src={quotesLeft} className="imgsubscr pb-3" alt="phone" />
					</Col>
					<Col xl={10} md={10} sm={10} xs={9}>
						<p className="h5 font-weight-bold pb-3">{props.content}</p>
						<p className="h5 text-uppercase text-warning font-weight-bold mb-4">{props.date}</p>
					</Col>
				</Row>
			</div>
		</Col>
	)
}