import './style.css'
import {pokemons} from './pokedex.js'

const pokemonList = document.querySelector('.pokemon-list');
const displayer = document.querySelector('.displayer');


const pokemonSquare = pokemon => `<section class="pokemon-square">
                <img src="/sprites/${pokemon['#']}.png" class="pokemon-sprite">
                <legend class="pokemon-name">${pokemon.Name}</legend>
                <p>
                    <span class="type ${pokemon['Type 1']}">${pokemon['Type 1']}</span>
                    <span class="type ${pokemon['Type 2']}">${pokemon['Type 2']}</span>
                </p>
            </section>`;

pokemons.forEach(pokemon => {
    pokemonList.innerHTML += pokemonSquare(pokemon);
})

const onPokemonSelection = pokemon => {

    displayer.style.animation = 'none';
    displayer.offsetHeight; /* trigger reflow */
    displayer.style.animation = null;
    displayer.classList.remove('hidden');
    displayer.innerHTML = `<img src='/splash/${pokemon['#']}.png' class="pokemon-splash">`;
    setTimeout(() => {
        displayer.classList.add('hidden');
    }, 2000)
}

document.querySelectorAll('.pokemon-square').forEach((element, index) => element.addEventListener('click', () => {
    onPokemonSelection(pokemons[index])
}));
displayer.addEventListener('click', () => {
    displayer.classList.add('hidden');
})
