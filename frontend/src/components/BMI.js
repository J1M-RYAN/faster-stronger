import { React, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
const BMI = ({ userData }) => {
	const [enoughInfo, setEnoughInfo] = useState(false);
	useEffect(() => {
		if (
			userData.hasOwnProperty('height') &&
			userData.hasOwnProperty('age') &&
			userData.hasOwnProperty('weight')
		) {
			setEnoughInfo(true);
		}
	}, [userData]);

	return (
		<Container className='py-3'>
			<h2>
				<i className='fas fa-heart' /> BMI
			</h2>
			<p>
				{enoughInfo
					? `Your BMI is ${(
							userData.weight / Math.pow(userData.height, 2)
					  ).toFixed(2)}`
					: 'Not enough info, Please Save your height, weight and sex'}
			</p>
		</Container>
	);
};

export default BMI;
