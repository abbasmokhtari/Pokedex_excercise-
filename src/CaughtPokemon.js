import React, { useState } from 'react';

let CaughtPokemon = (props) => {

	const [totalCaught, setTotalCaught] = useState(0);

	const incrementTotal = () => {
		setTotalCaught(totalCaught + 1);
	}
	
	return (
		<div>
			<p>Caught {totalCaught} Pokemon on {props.date}</p>
			<button onClick={incrementTotal}>Increment</button>
		</div>
	)
};

export default CaughtPokemon;