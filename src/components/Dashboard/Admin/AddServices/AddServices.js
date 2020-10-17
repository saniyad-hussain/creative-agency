import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const AddServices = () => {
	const [info, setInfo] = useState({});
	const [file, setFile] = useState(null);
	const handleBlur = (e) => {
		const newInfo = { ...info };
		newInfo[e.target.name] = e.target.value;
		setInfo(newInfo);
	};

	const handleFileChange = (e) => {
		const newFile = e.target.files[0];
		setFile(newFile);
	};

	const handleSubmit = (e) => {
		const formData = new FormData();
		console.log(info);
		formData.append('file', file);
		formData.append('title', info.title);
		formData.append('description', info.description);
		console.log(formData);
		fetch('https://obscure-badlands-01285.herokuapp.com/addService', {
			method: 'POST',
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.error(error);
			});
		e.preventDefault();
	};
	return (
		<div className="row">
			<div className="col-md-2">
				<Sidebar />
			</div>
			<div className="col-md-10 main-col">
				<div className="desh-head">
					<h4 className="pt-4 pl-5">Add Service</h4>
				</div>
				<div className="order-form col-md-6 p-5">
					<form action="" onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="Description">Title</label>
							<input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Service Title" required />
						</div>
						<div className="form-group">
							<label htmlFor="Description">Description</label>
							<textarea onBlur={handleBlur} name="description" className="form-control" id="" cols="10" rows="4" placeholder="Description" required />
						</div>

						<div className="form-group">
							<label htmlFor="Icon">Icon</label>
							<div className="upload-btn-wrapper ml-2">
								<button className="upload-btn w-75 ml-0 pl-0">
									Upload a file <FontAwesomeIcon icon={faCloudUploadAlt}></FontAwesomeIcon>
								</button>
								<input onChange={handleFileChange} type="file" required />
							</div>
						</div>
						<div className="form-group">
							<button type="submit" className="footer-btn">
								{' '}
								Add Service{' '}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddServices;
