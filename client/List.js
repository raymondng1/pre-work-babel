import React from 'react';
const List = ({ products }) => {
	return (
		<ul>
			{products.map(product => (
				<li key={product.id}> {product.name} </li>
			))}
		</ul>
	);
};

export default List;
