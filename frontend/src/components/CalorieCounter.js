import { React, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { tdeeCalc } from '../utilities/tdeeCalc';
import { poundsToKg, footToMeters } from '../utilities/converters';
const CalorieCounter = ({ userData }) => {
	const [currentTime, setCurrentTime] = useState(new Date());
	useEffect(() => {
		setTimeout(() => setCurrentTime(new Date()), 10000);
	}, [currentTime]);
	let calsBurnt = 0;
	let fatLoss = 0;
	let tdee = 0;
	if (userData.hasOwnProperty('currentFast')) {
		let totalMillisecondDif =
			currentTime.getTime() - userData.currentFast.startTime.getTime();
		let days = totalMillisecondDif / 86400000;
		console.log('days', days);
		let weightInkg =
			userData.unitOfWeight === 'kg'
				? userData.weight
				: poundsToKg(userData.weight);
		let heightInMeters =
			userData.unitOfHeight === 'Meters'
				? userData.height
				: footToMeters(userData.heightFootOnly, userData.heightInchesOnly);
		tdee = tdeeCalc(userData.isMale, weightInkg, heightInMeters, userData.age);
		calsBurnt = Math.floor(days * tdee);
		fatLoss = (userData.unitOfWeight === 'kg'
			? calsBurnt / 7700
			: calsBurnt / 3500
		).toFixed(2);
	}
	return (
		<Container className='py-3'>
			<Row>
				<Col sm='6'>
					<h3>Calories burnt so far: {calsBurnt}</h3>
				</Col>
			</Row>
			<Row>
				<Col sm='6'>
					<h3>
						Fat loss: {fatLoss} {userData.unitOfWeight}
					</h3>
				</Col>
			</Row>
			<Row>
				<Col sm='6'>
					<h3>TDEE: {tdee}</h3>
				</Col>
			</Row>
		</Container>
	);
};

export default CalorieCounter;
