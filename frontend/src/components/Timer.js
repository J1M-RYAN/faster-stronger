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
		days,
		milsToEnd,
		secsToEnd,
		minsToEnd,
		hoursToEnd,
		daysToEnd = 0;
	if (userData.hasOwnProperty('currentFast')) {
		totalMillisecondDif =
			currentTime.getTime() - userData.currentFast.startTime.getTime();
		seconds = Math.floor(totalMillisecondDif / 1000) % 60;
		minutes = Math.floor(totalMillisecondDif / 60000) % 60;
		hours = Math.floor(totalMillisecondDif / 3600000) % 24;
		days = Math.floor(totalMillisecondDif / 86400000);
		if (userData.currentFast.isEndTimeChosen) {
			milsToEnd =
				userData.currentFast.chosenEndTime.getTime() - currentTime.getTime();
			secsToEnd = Math.floor(milsToEnd / 1000) % 60;
			minsToEnd = Math.floor(milsToEnd / 60000) % 60;
			hoursToEnd = Math.floor(milsToEnd / 3600000) % 24;
			daysToEnd = Math.floor(milsToEnd / 86400000);
		}
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
							Time since fast began <br />
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
							{userData.currentFast.isEndTimeChosen ? (
								<div>
									Time until fast endd
									<br />
									Total Millisec Dif:
									{milsToEnd}
									<br />
									Seconds: {secsToEnd}
									<br />
									Minutes: {minsToEnd}
									<br />
									Hours: {hoursToEnd}
									<br />
									Days: {daysToEnd}
									<br />
								</div>
							) : (
								''
							)}
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
