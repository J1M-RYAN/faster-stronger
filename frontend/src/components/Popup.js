import { React } from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
const PopupDelete = ({
	togglePopup,
	handleFileUpload,
	fileChosen,
	saveFile,
}) => {
	return (
		<div className='popup'>
			<div className='popupInner'>
				<Container className='py-3'>
					<Nav className='justify-content-between popupHeader'>
						<div style={{ width: '5vw' }}></div>
						<h1>Choose A File</h1>
						<div style={{ width: '5vw' }}>
							<Button variant='danger' onClick={togglePopup}>
								X
							</Button>
						</div>
					</Nav>
					<Nav>
						<h3 className='warningText'>
							Warning! Importing data will delete any existing data.
						</h3>
					</Nav>

					<Nav className='justify-content-center py-2'>
						<input
							accept='.json'
							onChange={handleFileUpload}
							type='file'
							className='btn'
						/>
					</Nav>

					<Nav className='justify-content-center py-2'>
						<Button onClick={saveFile} disabled={!fileChosen}>
							Import Data
						</Button>
					</Nav>
				</Container>
			</div>
		</div>
	);
};

export default PopupDelete;
