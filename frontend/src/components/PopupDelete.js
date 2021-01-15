import { React } from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
const Popup = ({ togglePopupDelete, deleteData }) => {
	return (
		<div className='popup'>
			<div className='popupInner'>
				<Container className='py-3'>
					<Nav className='justify-content-between popupHeader'>
						<div style={{ width: '5vw' }}></div>
						<h3>Delete Local Data</h3>
						<div style={{ width: '5vw' }}>
							<Button variant='danger' onClick={togglePopupDelete}>
								X
							</Button>
						</div>
					</Nav>
					<Nav>
						<h3 className='warningText'>
							Warning! This action is permanent. Make sure to export your data
							first if you wish to keep it.
						</h3>
					</Nav>

					<Nav className='justify-content-center py-2'>
						<Button onClick={deleteData} variant='danger'>
							Delete Data
						</Button>
					</Nav>
				</Container>
			</div>
		</div>
	);
};

export default Popup;
