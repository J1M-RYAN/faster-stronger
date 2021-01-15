import React from 'react';
import {
	Container,
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
	Link,
} from 'react-bootstrap';
const Header = () => {
	return (
		<header>
			<Navbar bg='light' expand='lg'>
				<Container>
					<Navbar.Brand href='#home'>Faster Stronger</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Link href='#home'>
								<i className='fas fa-home'></i> Home
							</Nav.Link>
							<Nav.Link href='#link'>
								<i className='fas fa-history'></i> History
							</Nav.Link>
							<NavDropdown title='/r/fasting' id='basic-nav-dropdown'>
								<NavDropdown.Item
									href='https://www.reddit.com/r/fasting/'
									target='_blank'
								>
									Home
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item
									href='https://www.reddit.com/r/fasting/wiki/fasting_in_a_nutshell'
									target='_blank'
								>
									Wiki
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
