import { React, useState } from 'react';
import { Container, Row, Col, Form, Button, Collapse } from 'react-bootstrap';
const NewFast = () => {
	const [isEndTimeChosen, setIsEndTimeChosen] = useState(false);

	return (
		<Container className='py-3'>
			<h2>
				<i className='fas fa-plus' /> New Fast
			</h2>

			<Row>
				<Col sm='4'>
					<h4>
						<i className='fas fa-calendar-day' /> Start Date and Time
					</h4>
				</Col>
			</Row>
			<Row>
				<Col sm='2'>Start Date</Col>
				<Col sm='2'>
					<input type='date' id='startdate' name='startdate' />{' '}
				</Col>
				<Col sm='2'>Start Time (24hr)</Col>
				<Col sm='2'>
					<input type='time' id='starttime' name='starttime' />{' '}
				</Col>
			</Row>
			<Row className='py-2'>
				<Col sm='4'>
					<h4>
						<i className='fas fa-question' /> Have you picked an end time?
					</h4>
				</Col>
			</Row>
			<Form.Group as={Row} controlId='formPlaintextEmail' inline>
				<Col sm='2' xs='2'>
					<Form.Check
						type='radio'
						id=''
						label='Yes'
						checked={isEndTimeChosen}
						onChange={() => setIsEndTimeChosen(true)}
					/>
				</Col>
				<Col sm='2' xs='1'>
					<Form.Check
						type='radio'
						id='Female'
						label='No'
						checked={!isEndTimeChosen}
						onChange={() => setIsEndTimeChosen(false)}
					/>
				</Col>
			</Form.Group>
			<Collapse in={isEndTimeChosen}>
				<div>
					<Row>
						<Col sm='4'>
							<h4>
								<i className='fas fa-calendar-day' /> End Date and Time
							</h4>
						</Col>
					</Row>
					<Row>
						<Col sm='2'>End Date</Col>
						<Col sm='2'>
							<input type='date' id='enddate' name='enddate' />{' '}
						</Col>
						<Col sm='2'>End Time (24hr)</Col>
						<Col sm='2'>
							<input type='time' id='endtime' name='endtime' />{' '}
						</Col>
					</Row>
				</div>
			</Collapse>
			<Row className='py-3'>
				<Col sm='2'>
					<Button className='wide'>Begin Fast</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default NewFast;
