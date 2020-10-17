import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import Orders from './components/Dashboard/UserDashboard/Orders/Orders';
import UserServices from './components/Dashboard/UserDashboard/UserServices/UserServices';
import AddServices from './components/Dashboard/Admin/AddServices/AddServices';
import AdminMaker from './components/Dashboard/Admin/AdminMaker/AdminMaker';
import ServiceList from './components/Dashboard/Admin/ServiceList/ServiceList';
import Reviews from './components/Dashboard/UserDashboard/Reviews/Reviews';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const userContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({
		name: '',
		email: '',
		isLoggedIn: false,
		error: '',
		success: false,
	});
	return (
		<userContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<PrivateRoute path="/dashboard/order/:id">
						<Orders />
					</PrivateRoute>
					<Route path="/dashboard/myServices">
						<UserServices />
					</Route>
					<Route path="/dashboard/addService">
						<AddServices />
					</Route>
					<Route path="/dashboard/makeAdmin">
						<AdminMaker />
					</Route>
					<Route path="/dashboard/serviceList">
						<ServiceList />
					</Route>
					<Route path="/dashboard/addReview">
						<Reviews />
					</Route>
				</Switch>
			</Router>
		</userContext.Provider>
	);
}

export default App;
