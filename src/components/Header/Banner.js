import React from 'react';
import bannerImg from '../../images/logos/Frame.png';
import './Header.css';

const Banner = () => {
	return (
		<section className="banner-area d-flex justify-content-center align-items-center">
			<div className="container ">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-md-6">
						<h2>
							Let's grow your <br />
							brand to the next level
						</h2>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, quas.</p>
						<button className="btn btn-success">Hiring</button>
					</div>
					<div className="col-md-6">
						<img className="img-fluid" src={bannerImg} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
