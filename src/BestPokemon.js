import React, {useState, useEffect} from 'react';


const BestPokemonFetcher = () => {
	const [bestPokemon, setBestPokemon] = useState(null);
	
	
	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon/1/')
			.then(res => res.json())
			.then(data => setBestPokemon(data))
	}, [])
	
	return (
		!bestPokemon ? null : (
			<div>
			 		<BestPokemon pokemon={bestPokemon} />
			</div>	
		)
	)
	
	// if (!bestPokemon) {
	// 	return null
	// } else {
	// 	return (
	// 		<div>
	// 			<BestPokemon pokemon={bestPokemon} />
	// 		</div>
	// 	)
	// }
	
	
}


const BestPokemon = (props) => {
	console.log(props.pokemon);
	return (
		<div>
			<p>My favourite Pokemon is Squirtle</p>
      <ul>
        {/* Keys in children components are important. The key is an attribute that you must pass to all components created dynamically from an array. It's a
		unique and constant id that React uses to identify each component in the DOM and to know whether it's a different component or the same one */}
        {props.pokemon.abilities.map((item, index) => <li key={index}>{item.ability.name}</li>)}
     </ul>
		</div>
	);
};



export default BestPokemonFetcher;