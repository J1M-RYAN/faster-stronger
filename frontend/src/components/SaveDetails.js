import { React, useState } from 'react';
import { Container, Form, Button, Row, Col, Collapse } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
const SaveDetails = ({ setUserData, setEnoughInfo }) => {
	const [height, setHeight] = useState(1.7);
	const [heightFootOnly, setHeightFootOnly] = useState(3);
	const [heightInchesOnly, setHeightInchesOnly] = useState(0);
	const [open, setOpen] = useState(true);
	const [age, setAge] = useState(45);
	const [isMale, setIsMale] = useState(true);
	const [unitOfHeight, setUnitOfHeight] = useState('Meters');
	const [unitOfWeight, setUnitOfWeight] = useState('kg');
	const [weight, setWeight] = useState(50);
	const changeHeight = (event) => {
		event.preventDefault();
		setHeight(event.target.value);
	};
	const changeHeightFoot = (event) => {
		event.preventDefault();
		setHeightFootOnly(event.target.value);
	};
	const changeHeightInches = (event) => {
		event.preventDefault();
		setHeightInchesOnly(event.target.value);
	};
	const changeAge = (event) => {
		event.preventDefault();
		setAge(event.target.value);
	};
	const handleMale = (event) => {
		if (isMale) {
			return;
		}
		setIsMale(true);
	};
	const handleFemale = (event) => {
		if (!isMale) {
			return;
		}
		setIsMale(false);
	};
	const handleUnitChange = (event) => {
		if (unitOfHeight === event.target.value) return;
		setUnitOfHeight(event.target.value);
	};
	const handleUnitWeightChange = (event) => {
		console.log('event target valiue', event.target.value);
		if (unitOfWeight === event.target.value) return;
		setUnitOfWeight(event.target.value);
	};
	// todo
	const isValidHeight = (height) => {
		return true;
	};
	// todo
	const isValidWeight = (weight) => {
		return true;
	};

	const saveLocally = (event) => {
		event.preventDefault();
		if (!isValidHeight(height) || !isValidWeight(weight)) {
			return;
		}
		setOpen(!open);
		if (!open) {
			return;
		}
		const userData = {
			heightFootOnly,
			heightInchesOnly,
			unitOfHeight,
			unitOfWeight,
			height,
			weight,
			age,
			isMale,
		};
		localStorage.setItem('userData', JSON.stringify(userData));

		setUserData(userData);
		setEnoughInfo(true);
	};

	return (
		<Container className='py-3'>
			<h2>
				<i className='fas fa-save' />
				{open ? ' Save Your Details' : ' Details Saved Locally!'}
			</h2>

			<Form>
				<Collapse in={open}>
					<div>
						<h4>
							<i className='fas fa-ruler-vertical' /> Height
						</h4>
						<Form.Group as={Row} controlId='formPlaintextEmail'>
							<Form.Label column sm='2'>
								Unit
							</Form.Label>
							<Col sm='2'>
								<Form.Control
									as='select'
									className='my-1 mr-sm-2'
									id='inlineFormCustomSelectPref'
									value={unitOfHeight}
									onChange={handleUnitChange}
									custom
								>
									<option value='Meters'>Meters</option>
									<option value='Feet'>Feet</option>
								</Form.Control>
							</Col>

							<Form.Label column sm='2'>
								Height in {unitOfHeight}
							</Form.Label>
							<Col sm='2'>
								{unitOfHeight === 'Meters' ? (
									<Form.Control
										type='number'
										placeholder='1.7'
										step='.01'
										value={height}
										onChange={changeHeight}
									/>
								) : (
									<Form.Control as='select' onChange={changeHeightFoot}>
										{[...Array(7)].map((value, index) => (
											<option id={index + 1} key={index}>
												{index + 1} Foot
											</option>
										))}
									</Form.Control>
								)}
							</Col>
							{unitOfHeight === 'Feet' ? (
								<Col sm='2'>
									<Form.Control as='select' onChange={changeHeightInches}>
										{[...Array(12)].map((value, index) => (
											<option id={index + 1} key={index}>
												{index} {index !== 1 ? 'Inches' : 'Inch'}
											</option>
										))}
									</Form.Control>
								</Col>
							) : (
								''
							)}
						</Form.Group>

						<h4>
							<i className='fas fa-seedling' /> Age
						</h4>
						<Form.Group as={Row} controlId='formPlaintextEmail'>
							<Form.Label column sm='2'>
								Years
							</Form.Label>
							<Col sm='2'>
								<Form.Control
									type='number'
									placeholder='30'
									step='1'
									value={age}
									onChange={changeAge}
									min='18'
									max='99'
								/>
							</Col>
						</Form.Group>
						<h4>
							<i Sex className='fas fa-venus-mars' /> Sex
						</h4>
						<Form.Group as={Row} controlId='formPlaintextEmail' inline>
							<Col sm='2' xs='2'>
								<Form.Check
									type='radio'
									id='Male'
									label='Male'
									onChange={handleMale}
									checked={isMale}
								/>
							</Col>
							<Col sm='2' xs='1'>
								<Form.Check
									type='radio'
									id='Female'
									label='Female'
									onChange={handleFemale}
									checked={!isMale}
								/>
							</Col>
						</Form.Group>
						<h4>
							<i className='fas fa-weight' /> Starting Weight{' '}
						</h4>

						<Form.Group as={Row} controlId='formPlaintextEmail' inline>
							<Form.Label column sm='2'>
								Unit
							</Form.Label>
							<Col sm='2'>
								<Form.Control
									as='select'
									className='my-1 mr-sm-2'
									id='inlineFormCustomSelectPref'
									value={unitOfWeight}
									onChange={handleUnitWeightChange}
									custom
								>
									<option value='kg'>kg</option>
									<option value='lbs'>lbs</option>
								</Form.Control>
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId='formPlaintextEmail' inline>
							<Col sm='4'>
								<RangeSlider
									min={unitOfWeight === 'kg' ? '50' : '110'}
									max={unitOfWeight === 'kg' ? '250' : '550'}
									step={unitOfWeight === 'kg' ? '0.05' : '0.1'}
									value={weight}
									onChange={(changeEvent) =>
										setWeight(changeEvent.target.value)
									}
									size='lg'
								/>
							</Col>
							<Col sm='2'>
								<Form.Control
									type='number'
									placeholder='50'
									value={weight}
									onChange={(changeEvent) =>
										setWeight(changeEvent.target.value)
									}
									step={unitOfWeight === 'kg' ? '0.05' : '0.1'}
									min={unitOfWeight === 'kg' ? '50' : '110'}
									max={unitOfWeight === 'kg' ? '250' : '550'}
								/>
							</Col>
						</Form.Group>
					</div>
				</Collapse>
				<Row>
					<Col sm='2'>
						<Button
							variant='primary'
							type='submit'
							onClick={saveLocally}
							className='wide'
						>
							{open ? (
								<>
									<i className='fas fa-save' /> Save Locally
								</>
							) : (
								<>
									<i className='fas fa-edit' /> Edit Data
								</>
							)}
						</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
};

export default SaveDetails;
