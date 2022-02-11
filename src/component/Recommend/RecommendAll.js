import React from "react";
import { Row } from 'react-bootstrap';
import RecommendComponent from './Recommend';
import { Container } from 'react-bootstrap';

export default function RecommendAllComponent(props){
	return(
		<section className="text-center py-5 bg-dark">
			<Container>
				<Row>
					<h1 className="mb-3">Don’t miss the next AAP stock win!</h1>
					<RecommendComponent logo="google" percent="+300%"/>
					<RecommendComponent logo="nvidia" percent="+569%"/>
					<RecommendComponent logo="marvell" percent="+285%"/>
					<h6 className="mt-3">Google recommended in 2014. Nvidia and Marvell recommended in 2019. All returns as of 01/04/22.</h6>
				</Row>	
			</Container>
		</section>
	)
}