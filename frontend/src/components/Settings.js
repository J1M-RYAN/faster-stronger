import { React, useState } from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import FileSaver from 'file-saver';
import JSONUpload from './JSONUpload';
import PopupDelete from './PopupDelete';
const Settings = ({ setUserData, setEnoughInfo, userData, enoughInfo }) => {
	const [showPopupDelete, setShowPopupDelete] = useState(false);
	const deleteData = (event) => {
		event.preventDefault();
		localStorage.clear();
		setUserData({});
		setEnoughInfo(false);
		togglePopupDelete();
		console.log('data cleared!');
	};
	const exportData = (event) => {
		event.preventDefault();
		const userData = new Blob([localStorage.getItem('userData')], {
			type: 'application/json',
		});
		FileSaver.saveAs(
			userData,
			`faster-stronger-data-${new Date().toUTCString()}.json`
		);
		console.log(JSON.parse(JSON.stringify(localStorage.getItem('userData'))));
	};
	const togglePopupDelete = () => {
		setShowPopupDelete(!showPopupDelete);
	};

	return (
		<Container className='py-3'>
			<h2>
				<i className='fas fa-cog' /> Settings
			</h2>
			<Row>
				<Col sm='2'>
					<Button onClick={exportData}>
						<i className='fas fa-download' /> Export Data
					</Button>
				</Col>
				<Col sm='2'>
					<JSONUpload
						setUserData={setUserData}
						setEnoughInfo={setEnoughInfo}
						userData={userData}
					/>
				</Col>
				<Col sm='2'>
					<Button variant='danger' onClick={togglePopupDelete}>
						<i className='fas fa-trash-alt' /> Delete Data
					</Button>
					{showPopupDelete ? (
						<PopupDelete
							togglePopupDelete={togglePopupDelete}
							deleteData={deleteData}
						/>
					) : (
						''
					)}
				</Col>
			</Row>
		</Container>
	);
};

export default Settings;
