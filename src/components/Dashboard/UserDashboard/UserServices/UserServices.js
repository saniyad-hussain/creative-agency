import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../../App';
import RequestServices from './RequestServices';
import Sidebar from '../../Sidebar/Sidebar';
import './UserServices.css';

const UserServices = () => {
	const [loggedInUser, setloggedInUser] = useContext(userContext);
	const [orderData, setOrderData] = useState([]);
	useEffect(() => {
		fetch('https://obscure-badlands-01285.herokuapp.com/getServiceByEmail?email=' + loggedInUser.email)
			.then((res) => res.json())
			.then((data) => {
				setOrderData(data);
			});
	}, []);

	return (
		<div className="row">
			<div className="col-md-2">
				<Sidebar />
			</div>
			<div className="col-md-10 main-col">
				<div className="desh-head">
					<h4 className="pt-4 pl-5">My Services</h4>
				</div>
				<div className="row px-5 py-3">
					{orderData.map((order) => (
						<RequestServices order={order}></RequestServices>
					))}
				</div>
			</div>
		</div>
	);
};

export default UserServices;
