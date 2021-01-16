import { React, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Timer = ({ userData }) => {
	const [currentTime, setCurrentTime] = useState(new Date());
	return (
		<Container className='py-3'>
			<Row>
				<Col>
					<h2>
						<i className='fas fa-clock' /> Timer
					</h2>
				</Col>
			</Row>
			<Row>
				<Col sm='2'>
					{userData.hasOwnProperty('currentFast') ? (
						<>
							Millisec Dif:{' '}
							{currentTime.getTime() - userData.currentFast.startTime.getTime()}
							{console.log(typeof userData.currentFast.startTime)}
						</>
					) : (
						'You must start a fast to see the time'
					)}
				</Col>
			</Row>
			<Row>
				<Col sm='2'></Col>
			</Row>
		</Container>
	);
};

export default Timer;
