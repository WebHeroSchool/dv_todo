import React from 'react';

const ItemList = () => (<ul>
	<li>Урок английского</li>
	<li>Тренировка</li>
	<li>ДЗ</li>
	<li>Прогулка</li>
	</ul>);

const App = () => (<div>
	<h1>Список дел:</h1>
	<ItemList />
</div>);
	
export default App;