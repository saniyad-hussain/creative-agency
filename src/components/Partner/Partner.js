import React from 'react';
import netflix from '../../images/logos/netflix.png';
import google from '../../images/logos/google.png';
import slack from '../../images/logos/slack.png';
import uber from '../../images/logos/uber.png';
import airbnb from '../../images/logos/airbnb.png';

const Partner = () => {
	return (
		<div className="container partner-container">
			<div className="row partner-logo d-flex justify-content-center">
				<img className="img-fluid" src={netflix} alt="" />

				<img src={google} className="img-fluid" alt="" />

				<img src={slack} className="img-fluid" alt="" />

				<img src={uber} className="img-fluid" alt="" />

				<img src={airbnb} className="img-fluid" alt="" />
			</div>
		</div>
	);
};

export default Partner;
