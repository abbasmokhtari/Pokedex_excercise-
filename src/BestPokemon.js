import React from 'react';

const BestPokemon = (props) => {
	return (
		<div>
			<p>My favourite Pokemon is Squirtle</p>
      <ul>
        {/* Keys in children components are important. The key is an attribute that you must pass to all components created dynamically from an array. It's a
		unique and constant id that React uses to identify each component in the DOM and to know whether it's a different component or the same one */}
        {props.abilities.map((name, index) => <li key={index}>{name}</li>)}
     </ul>
		</div>
	);
};

export default BestPokemon;