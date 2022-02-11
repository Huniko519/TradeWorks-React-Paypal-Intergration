import React from "react";
import PricingComponent from './Pricing';
import { Row, Container} from 'react-bootstrap';

export default function PricingAllComponent(){
	return(
		<section className="py-5">
			<Container>
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h1>Join The Action Alerts PLUS Investing Club</h1>
            <p>Activate Your 14-Day Free Trial Now</p>
          </div>
        </div>
        <Row className="text-center align-items-end">
          <PricingComponent title="Monthly" price="29.99"/>
          <PricingComponent title="Annual" price="25.00"/>
          <PricingComponent title="Two Year" price="20.83"/>
        </Row>
			</Container>
    </section>
	)
}