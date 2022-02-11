import React from "react";
import ManagersComponent from './Managers';
import { Row, Container} from 'react-bootstrap';

export default function ManagersAllComponent(){
	return(
		<section className="py-5 bg-dark">
			<Container>
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h1>Meet the Action Alerts PLUS<br/>co-portfolio managers</h1>
          </div>
        </div>
        <Row className="text-center align-items-end">
          <ManagersComponent name="bob" title="BOB LANG" content='Bob has 23 years of finance experience, created his own hedge fund and options trading company, is a published author of "Know Your Options" and even coined the acronym "FANG."'/>
          <ManagersComponent name="chris" title='CHRIS "BULLDOG" VERSACE' content='Bringing 28 years of cross-industry knowledge and thematic flex to the AAP Portfolio, Chris is a co-author of "Nasdaq`s Daily Markets" and "Cocktail Investing: Distilling Everyday Noise into Clear Investing Signals."'/>
        </Row>
			</Container>
    </section>
	)
}