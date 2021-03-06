import React, { useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { faCartPlus, faCommentAlt, faPlusSquare, faSignOutAlt, faTasks, faTruck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css';
import dashLogo from '../../../images/logos/logo.png';
import jwt_decode from 'jwt-decode';
import { userContext } from '../../../App';

const Sidebar = () => {
	const [loggedInUser, setloggedInUser] = useContext(userContext);
	const history = useHistory();
	const { id } = useParams();
	const isLoggedIn = () => {
		const token = sessionStorage.getItem('token');
		if (!token) {
			return false;
		}
		const decodedToken = jwt_decode(token);
		// get current time
		const currentTime = new Date().getTime() / 1000;
		// compare the expiration time with the current time
		// will return false if expired and will return true if not expired
		return decodedToken.exp > currentTime;
	};
	return (
		<div className="sidebar d-flex flex-column justify-content-between col-md-2  px-4 py-3 " style={{ height: '100vh' }}>
			<ul className="list-unstyled">
				<div className="sidebar-logo ">
					<Link to="/">
						<img src={dashLogo} alt="" />
					</Link>
				</div>
				{loggedInUser.isAdmin === false ? (
					<>
						<li>
							<Link to={`/dashboard/order/${id}`} className="dash-menu">
								<FontAwesomeIcon icon={faCartPlus} /> <span>Order</span>
							</Link>
						</li>
						<li>
							<Link to="/dashboard/myServices" className="dash-menu">
								<FontAwesomeIcon icon={faTruck} /> <span>My Services</span>
							</Link>
						</li>

						<li>
							<Link to="/dashboard/addReview" className="dash-menu">
								<FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
							</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to="/dashboard/serviceList" className="dash-menu">
								<FontAwesomeIcon icon={faTasks} /> <span>Service List</span>
							</Link>
						</li>
						<li>
							<Link to="/dashboard/addService" className="dash-menu">
								<FontAwesomeIcon icon={faPlusSquare} /> <span>Add Service</span>
							</Link>
						</li>
						<li>
							<Link to="/dashboard/makeAdmin" className="dash-menu">
								<FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
							</Link>
						</li>
					</>
				)}
			</ul>
			<div className="mb-4">
				<Link to="/" className="dash-logout">
					<FontAwesomeIcon icon={faSignOutAlt} />{' '}
					<span
						onClick={() => {
							setloggedInUser({});
							sessionStorage.setItem('token', '');
							history.push('/');
						}}
					>
						Logout
					</span>
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
