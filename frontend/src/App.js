import { useState } from 'react';
import Header from './components/Header';
import SaveDetails from './components/SaveDetails';
import Settings from './components/Settings';
import BMI from './components/BMI';
import NewFast from './components/NewFast';
import Timer from './components/Timer';
import CalorieCounter from './components/CalorieCounter';
const App = () => {
	const [userData, setUserData] = useState(
		localStorage.getItem('userData') === null
			? {}
			: JSON.parse(localStorage.getItem('userData'))
	);
	const [enoughInfo, setEnoughInfo] = useState(false);
	if (userData.hasOwnProperty('currentFast')) {
		if (
			userData.currentFast.hasOwnProperty('startTime') &&
			typeof userData.currentFast.startTime === 'string'
		) {
			let userDataCopy = JSON.parse(JSON.stringify(userData));
			userDataCopy.currentFast.startTime = new Date(
				userDataCopy.currentFast.startTime
			);
			userDataCopy.currentFast.chosenEndTime = new Date(
				userDataCopy.currentFast.chosenEndTime
			);
			setUserData(userDataCopy);
			localStorage.setItem('userData', JSON.stringify(userDataCopy));
		}
	}

	return (
		<>
			<Header />
			<main>
				<CalorieCounter userData={userData} />
				<Timer userData={userData} />
				<NewFast userData={userData} setUserData={setUserData} />
				<BMI
					userData={userData}
					enoughInfo={enoughInfo}
					setEnoughInfo={setEnoughInfo}
				/>
				<Settings
					setUserData={setUserData}
					setEnoughInfo={setEnoughInfo}
					userData={userData}
					enoughInfo={enoughInfo}
				/>
				<SaveDetails setUserData={setUserData} setEnoughInfo={setEnoughInfo} />
			</main>
		</>
	);
};

export default App;
