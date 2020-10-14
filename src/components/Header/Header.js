import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import Partner from '../Partner/Partner';

const Header = () => {
	return (
		<>
			<div className="outside"></div>
			<div className="inside">
				<Navbar />
				<Banner />
				<Partner />
			</div>
		</>
	);
};

export default Header;
