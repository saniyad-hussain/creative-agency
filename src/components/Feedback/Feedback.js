import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Feedback.css';

const Feedback = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch('https://obscure-badlands-01285.herokuapp.com/reviews')
			.then((res) => res.json())
			.then((data) => {
				setReviews(data);
			});
	}, []);
	return (
		<div className="container feedback-section">
			<h4 className="text-center feedback-head">
				{' '}
				Clients <span>Feedback</span>{' '}
			</h4>

			<div className="row card-row mt-5">
				{reviews.slice(0, 6).map((review) => {
					return (
						<div className="col-md-3 feedback-card">
							<div className="client-info d-flex">
								<img className="img-fluid" src={`data:image/png;base64,${review.image.img}`} alt="" />
								<div className="client-text">
									<h6>{review.name}</h6>
									<p>{review.designation}</p>
								</div>
							</div>
							<div className="feedback-text">
								<p>{review.comment}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Feedback;
