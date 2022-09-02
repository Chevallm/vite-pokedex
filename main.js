import './style.css'
import {pokemons} from './pokedex.js'
import {Displayer} from "./displayer.js";

const pokemonList = document.querySelector('.pokemon-list');
const displayer = new Displayer(document.querySelector('.displayer'));


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
});

const onPokemonSelection = pokemon => {
    displayer.resetAnimation();
    displayer.show()
    displayer.setImage(pokemon['#']);
    setTimeout(() => {
        if (displayer.isVisible) {
            //displayer.hide();
            displayer.resetAnimation();
        }
    }, 2000)
};

document.querySelectorAll('.pokemon-square').forEach((element, index) => element.addEventListener('click', () => {
    onPokemonSelection(pokemons[index])
}));
