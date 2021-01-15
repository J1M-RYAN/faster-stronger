import { React } from 'react';
import { Container } from 'react-bootstrap';
import { poundsToKg, footToMeters } from '../utilities/converters';
const BMI = ({ userData }) => {
	const enoughInfo =
		userData.hasOwnProperty('height') && userData.hasOwnProperty('weight');
	let bmi = 0;
	if (enoughInfo) {
		let weightInkg =
			userData.unitOfWeight === 'kg'
				? userData.weight
				: poundsToKg(userData.weight);
		let heightInMeters =
			userData.unitOfHeight === 'Meters'
				? userData.height
				: footToMeters(userData.heightFootOnly, userData.heightInchesOnly);
		console.log('heightInMeters', heightInMeters);
		bmi = (weightInkg / Math.pow(heightInMeters, 2)).toFixed(2);
	}

	return (
		<Container className='py-3'>
			<h2>
				<i className='fas fa-heart' /> BMI
			</h2>
			<p>
				{enoughInfo
					? `Your BMI is ${bmi}`
					: 'Not enough info, Please Save your height, weight and sex'}
			</p>
		</Container>
	);
};

export default BMI;
