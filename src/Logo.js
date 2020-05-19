import React from 'react';

const Logo = (props) => {
	// let appName = 'Pokedex';
	console.log(props);
	return (
		<header>
			<h1>Welcome to the {props.appName}</h1>
			<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" />
		</header>
	);
};

export default Logo;