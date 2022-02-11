import React from "react";
import { Row } from 'react-bootstrap';
import ServicesComponent from './Services';
import { Container } from 'react-bootstrap';

export default function ServicesAllComponent(){
	return(
		<section className="text-center py-5">
			<Container>
				<Row>
					<h1 className="mb-3">What do AAP members get?</h1>
					<ServicesComponent title="REAL-TIME TRADE ALERTS" content="Receive an email or mobile notification with every buy or sell decision we make."/>
					<ServicesComponent title="REAL-TIME TRADE ALERTS" content="Receive an email or mobile notification with every buy or sell decision we make."/>
					<ServicesComponent title="REAL-TIME TRADE ALERTS" content="Receive an email or mobile notification with every buy or sell decision we make."/>
					<ServicesComponent title="REAL-TIME TRADE ALERTS" content="Receive an email or mobile notification with every buy or sell decision we make."/>
					<ServicesComponent title="REAL-TIME TRADE ALERTS" content="Receive an email or mobile notification with every buy or sell decision we make."/>
					<ServicesComponent title="REAL-TIME TRADE ALERTS" content="Receive an email or mobile notification with every buy or sell decision we make."/>
				</Row>	
			</Container>
		</section>
	)
}