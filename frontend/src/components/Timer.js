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
				<Col sm='6'>
					{userData.hasOwnProperty('currentFast') ? (
						<div>
							<h2>
								Fasting For <br />
							</h2>
							<h4>
								{days} {days === 1 ? 'Day' : 'Days'}: {hours}{' '}
								{hours === 1 ? 'Hour' : 'Hours'}: {minutes}{' '}
								{minutes === 1 ? 'Minute' : 'Minutes'}: {seconds}{' '}
								{seconds === 1 ? 'Second' : 'Seconds'}
							</h4>
							{userData.currentFast.isEndTimeChosen ? (
								milsToEnd >= 0 ? (
									<div>
										<h2>Time Left</h2>
										<h4>
											{daysToEnd} {daysToEnd === 1 ? 'Day' : 'Days'}:{' '}
											{hoursToEnd} {hoursToEnd === 1 ? 'Hour' : 'Hours'}:{' '}
											{minsToEnd} {minsToEnd === 1 ? 'Minute' : 'Minutes'}:{' '}
											{secsToEnd} {secsToEnd === 1 ? 'Second' : 'Seconds'}
										</h4>
									</div>
								) : (
									'times up!'
								)
							) : (
								''
							)}
						</div>
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
