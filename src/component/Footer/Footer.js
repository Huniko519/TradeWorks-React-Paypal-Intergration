import React from "react";
import logo from '../../assets/img/logo.png';
import { Container} from 'react-bootstrap';

export default function FooterComponent(){
	return(
		<div>
			<div className="py-5 bg-light">
				<Container>
	        <div className="text-left text-dark">
	          <h4 className="py-4">FREQUENTLY ASKED QUESTIONS</h4>
	          <div className="mx-auto">
	            <h5 className="mt-5">What are the features of the Action Alerts PLUS Portfolio?</h5>
	            <p>Our portfolio is diversified with recommendations in all nine S&P sectors, and only overweight in the areas we believe are set to outperform the rest. We analyze our holdings (technically and fundamentally) on a daily basis and take action as necessary—take a little off the table, add to positions and trim losers.</p>
	          	<hr/>
	          </div>
	          <div className="mx-auto">
	            <h5 className="mt-5">What is the Action Alerts PLUS Monthly Call?</h5>
	            <p>The AAP Portfolio Managers share insights and give real-world examples to help you make investment decisions like the pros. Action Alerts PLUS members are also able to submit questions in advance that they would like answered during the live monthly call. Members are able to watch the live-stream webcast from the Action Alerts PLUS homepage or dial in using our exclusive conference line.</p>
	          	<hr/>
	          </div>
	          <div className="mx-auto">
	            <h5 className="mt-5">What is your renewal policy?</h5>
	            <p>For uninterrupted service, we will renew your subscription automatically at the term stated and charge your card the then-current list price [or such discounted price as TheStreet may elect to apply], until you cancel. For subscriptions longer than 6 months in length we will notify you of your renewal rate 30 days prior to the expiration of your current subscription. You may cancel by calling 1-866-321-8726.</p>
	          	<hr/>
	          </div>
	        </div>
				</Container>
			</div>
			<div className="py-5 align-right mb-5">
				<Container >
	        <div className="text-ligth">
	        	<img src={logo} className="logo pt-1" alt="logo" />
	          <p className="py-2">Terms Of Use • Reviews • Privacy Policy • Advertise • Market Holidays • Customer Service • Data • Topic Dictionary • Subscriptions</p>
	          <p>Past performance is not a predictor of future results. Individual investment results may vary. All investing involves risk of loss.<br/>© 2022 TheStreet, Inc. All rights reserved. Action Alerts PLUS is a registered trademark of TheStreet, Inc.</p>
	        </div>	          
				</Container>
	    </div>
    </div>
	)
}