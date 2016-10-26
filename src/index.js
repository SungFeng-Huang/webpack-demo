var add = require('./add');
import multiply from './multiply';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class App extends Component {
	render() {
		return ( <h1 className="title">Hello</h1> );
	}
}

ReactDOM.render(
		<App />,
		document.getElementById('app')
);

console.log('9876 + 1546 = ', add(9876, 1546));
console.log('9876 + 1546 = ', multiply(9876, 1546));
