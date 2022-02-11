import React from "react";
import Subscription from './Subscription';
import { Container, Row } from 'react-bootstrap';

export default function SubscriptionAllComponent(){
	return(
		<section className="bg-dark py-5">
			<Container>
				<h1 className="mb-3 text-center">What subscribers say about our club</h1>
				<Row className="text-left">
					<Subscription date="11/2/2021" content="Truly enjoy learning/watching how y’all apply tools in real world scenarios... Keep up the good work!"/>
					<Subscription date="11/2/2021" content="Overlaid an options strategy after listening to [Bob Lang] and [Chris Versace] on FB yesterday…the info was able to influence a profitable Put buying move this morning. Paid for my year already."/>
					<Subscription date="11/2/2021" content="Overlaid an options strategy after listening to [Bob Lang] and [Chris Versace] on FB yesterday…the info was able to influence a profitable Put buying move this morning. Paid for my year already."/>
					<Subscription date="11/2/2021" content="Truly enjoy learning/watching how y’all apply tools in real world scenarios... Keep up the good work!"/>
					<Subscription date="11/2/2021" content="Truly enjoy learning/watching how y’all apply tools in real world scenarios... Keep up the good work!"/>
					<Subscription date="11/2/2021" content="Overlaid an options strategy after listening to [Bob Lang] and [Chris Versace] on FB yesterday…the info was able to influence a profitable Put buying move this morning. Paid for my year already."/>
				</Row>	
			</Container>
		</section>
	)
}