import React from 'react';
import HeaderComponent from '../component/Header/Header';
import MainbannerComponent from '../component/Mainbanner/Mainbanner';
import PricingAllComponent from '../component/Pricing/PricingAll';
import AboutComponent from '../component/About/About';
import ServicesAllComponent from '../component/Services/ServicesAll';
import SubscriptionAllComponent from '../component/Subscription/SubscriptionAll';
import RecommendAllComponent from '../component/Recommend/RecommendAll';
import ManagersAllComponent from '../component/Managers/ManagersAll';
import StickyFooterComponent from '../component/Footer/StickyFooter';
import FooterComponent from '../component/Footer/Footer';

export default function Home(props){
	return(
    <div>
  		<HeaderComponent />
  		<MainbannerComponent />
      <PricingAllComponent />
      <RecommendAllComponent />
      <ServicesAllComponent />
      <SubscriptionAllComponent />
      <AboutComponent />
      <ManagersAllComponent />
  		<StickyFooterComponent />
      <FooterComponent />
    </div>
	)
}