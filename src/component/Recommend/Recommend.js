import React from "react";
import { Col, } from 'react-bootstrap';
import google from '../../assets/img/Google-logo.png';
import nvidia from '../../assets/img/Nvidia-logo.png';
import marvell from '../../assets/img/Marvell-logo.png';

export default function RecommendComponent(props){
	return(
		<Col className="py-2" >
			<div className="text-center bg-light divrounded p-3">
		    <img src={props.logo==='google'?google:nvidia&&props.logo==='nvidia'?nvidia:marvell} className="imgrecommend" alt="logo" />
		    <p className="text-dark fs-1 mt-2">{props.percent}</p>
		  </div>
		</Col>
	)
}