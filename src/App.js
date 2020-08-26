import React from 'react';

const ItemList = () => (<ul>
	<li>Урок английского</li>
	<li>Тренировка</li>
	<li>ДЗ</li>
	<li>Прогулка</li>
	</ul>);

reactcomponent
const App = () => (<div>
	<h1>Список дел:</h1>
	<ItemList />
</div>);
	
export default App;
                   
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
