export class Displayer {

    element;

    get isVisible() {
        return this.element.classList.contains('shown')
    }

    constructor(element) {
        this.element = element;
        this.hideOnClick();
    }

    hideOnClick() {
        this.element.addEventListener('click', () => {
            if (this.isVisible) {
                //this.hide();
                this.resetAnimation();
            }
        })
    }

    hide() {
        this.element.classList.remove('shown');
        this.element.innerHTML = null;
    }

    show() {
        this.element.classList.add('shown');
    }

    resetAnimation() {
        this.element.style.animation = 'none';
        this.element.offsetHeight;
        this.element.style.animation = null;
    }

    setImage(pokemonId) {
        this.element.innerHTML = `<img src='https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__${(pokemonId+'').padStart(3, '0')}__xy.gif' class="pokemon-splash">`;
    }


}
