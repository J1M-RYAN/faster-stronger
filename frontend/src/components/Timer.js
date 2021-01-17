import { React, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Timer = ({ userData }) => {
	const [currentTime, setCurrentTime] = useState(new Date());
	useEffect(() => {
		setTimeout(() => setCurrentTime(new Date()), 1000);
	}, [currentTime]);
	let totalMillisecondDif,
		seconds,
		minutes,
		hours,
		days = 0;
	if (userData.hasOwnProperty('currentFast')) {
		totalMillisecondDif =
			currentTime.getTime() - userData.currentFast.startTime.getTime();
		seconds = Math.floor(totalMillisecondDif / 1000) % 60;
		minutes = Math.floor(totalMillisecondDif / 60000) % 60;
		hours = Math.floor(totalMillisecondDif / 3600000) % 24;
		days = Math.floor(totalMillisecondDif / 86400000);
	}

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
				<Col sm='4'>
					{userData.hasOwnProperty('currentFast') ? (
						<h2>
							Total Millisec Dif:
							{totalMillisecondDif}
							<br />
							Seconds: {seconds}
							<br />
							Minutes: {minutes}
							<br />
							Hours: {hours}
							<br />
							Days: {days}
							<br />
						</h2>
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
