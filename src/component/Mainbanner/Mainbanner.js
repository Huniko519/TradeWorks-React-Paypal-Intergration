import React from "react";
import { Link } from 'react-router-dom';

export default function MainbannerComponent(){
	return(
		<section className="mainBanner">
			<h1>GROW YOUR INVESTMENT PORTFOLIO</h1>
			<div className="banner-text">
				<h4>Get clear fundamental and technical analysis from our<br/>financial experts so you can master the market.</h4>
				<h4>START A 14 DAY FREE TRIAL</h4>
				<Link to="/signup" className="btn btn-warning shadow mt-2 btnjoin p-2">JOIN NOW</Link>
			</div>
		</section>
	)
}