import {Game} from "./game";

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = "<app></app>";
    const game = new Game('app');
    game.bootstrap();
});



