import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
const JSONUpload = ({ setUserData }) => {
	const [json, setJson] = useState({});
	const inputFile = useRef(null);

	const handleFileUpload = (e) => {
		const { files } = e.target;
		if (files && files.length) {
			const filename = files[0].name;

			var parts = filename.split('.');
			const fileType = parts[parts.length - 1];
			console.log('fileType', fileType);

			setJson(files[0]);
			readText(json);
		}
	};

	const onButtonClick = () => {
		inputFile.current.click();
	};

	const readText = async (file) => {
		const text = new Response(file);
		localStorage.setItem('userData', text);
		setUserData(JSON.parse(JSON.stringify(localStorage.getItem('userData'))));
	};

	console.log('json', json);
	return (
		<div>
			<input
				style={{ display: 'none' }}
				accept='.json'
				ref={inputFile}
				onChange={handleFileUpload}
				type='file'
			/>
			<Button variant='warning' onClick={onButtonClick}>
				Import Data
			</Button>
		</div>
	);
};

export default JSONUpload;
