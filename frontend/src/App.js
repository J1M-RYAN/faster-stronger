import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SaveDetails from './components/SaveDetails';
import Settings from './components/Settings';
import BMI from './components/BMI';
import NewFast from './components/NewFast';
import { Container, Row, Card, Button } from 'react-bootstrap';

const dogApiUrl = 'https://dog.ceo/api/breeds/image/random';
const App = () => {
	const [dogData, setDogData] = useState({});
	const [userData, setUserData] = useState({});
	const [enoughInfo, setEnoughInfo] = useState(false);
	useEffect(() => {
		getDogImage();
	}, []);
	const getDogImage = async () => {
		const response = await fetch(dogApiUrl);
		const jsonData = await response.json();
		setDogData(jsonData);
	};
	return (
		<>
			<Header />
			<main>
				<NewFast />
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
				<Container className='py-3'>
					<Row xs={2} sm={3} md={4}>
						{[...Array(20)].map((e, i) => (
							<Card style={{ width: '18rem' }} className='mx-auto my-1'>
								<Card.Img variant='top' src={dogData.message} />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
									<Button variant='primary'>Go somewhere</Button>
								</Card.Body>
							</Card>
						))}
					</Row>
				</Container>
			</main>
			<Footer />
		</>
	);
};

export default App;
