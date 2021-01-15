import { React } from 'react';
import { Container } from 'react-bootstrap';
const BMI = ({ userData }) => {
	const enoughInfo =
		userData.hasOwnProperty('height') && userData.hasOwnProperty('weight');
	let bmi = 'Unknown';
	if (enoughInfo) {
		bmi = (userData.weight / Math.pow(userData.height, 2)).toFixed(2);
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
