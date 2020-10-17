import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurWorks from '../OurWorks/OurWorks';
import Reviews from '../Feedback/Feedback';
import Services from '../Services/Services';

const Home = () => {
	return (
		<div>
			<Header />
			<Services />
			<OurWorks />
			<Reviews />
			<Footer />
		</div>
	);
};

export default Home;
