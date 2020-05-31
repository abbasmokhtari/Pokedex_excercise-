import React from 'react';
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';
 
const logWhenClicked = () => {
	console.log('I am clikced')
}
function App() {
	return (
		<div>
			<Logo handleClick={logWhenClicked} appName="Pokedex"/>
			<BestPokemon abilities={['Anticipation', 'Adaptability', 'Run-Away']} />
			<CaughtPokemon date = {new Date().toLocaleDateString()} />
		</div>
	);
}

export default App;
