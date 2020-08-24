import React from 'react';
import logo from './logo.svg';
import './App.css';
import { count, length } from './number.js';

const day = '23.08.2020';
const today = `Today is ${day}`;
const tuesday = true;

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
        </p>
				<p style={{
					color: 'pink',
					fontSize: 35
				}}>
					Hey tudo mundo!
				</p>
				<p>
					{today}
				</p>
				<p>{23 + 8}
				</p>
				<p>
					{tuesday ? `Yeeeees!` : `No!`}
					{undefined}
					{null}
				{true}
					{false}
				</p>
				<p>{count * length}
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
        </a>
			</header>
		</div>
	);
}

export default App;
