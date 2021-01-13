import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SaveDetails from './components/SaveDetails';
import Settings from './components/Settings';
import BMI from './components/BMI';
import { Container, Row, Card, Button } from 'react-bootstrap';

const dogApiUrl = 'https://dog.ceo/api/breeds/image/random';
const App = () => {
	const [dogData, setDogData] = useState({});
	const [userData, setUserData] = useState({});
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
				<BMI userData={userData} />
				<Settings setUserData={setUserData} />
				<SaveDetails setUserData={setUserData} />
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
