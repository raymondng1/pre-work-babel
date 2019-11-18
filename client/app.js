import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import List from './List';

import Title from './Title';

console.log('hi');

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			products: []
		};
	}
	async componentDidMount() {
		this.setState({
			products: (
				await axios.get('https://acme-users-api-rev.herokuapp.com/api/products')
			).data
		});
	}
	render() {
		const { products } = this.state;
		return (
			<div>
				<Title />
				<List products={products} />
			</div>
		);
	}
}
const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
