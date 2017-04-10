import {DomTools} from "./dom-tools";
import {Snake} from "./snake";
import Edge = DomTools.Edge;
import Space = DomTools.Space;
import GameElement = DomTools.GameElement;
import Line = DomTools.Line;
export class GameBoard {
    private readonly width = 40;
    private readonly height = 20;
    private board: GameElement[][];
    private snake: Snake;

    constructor(element: HTMLUnknownElement) {
        this.buildBoard(element)
    }

    buildBoard(element) {
        this.board = [
            new Line().top(),
            ...new Line().fillMiddle(),
            new Line().top()
        ];
        this.addBoardToDom(element);

        this.snake = new Snake(this.board);

        window.addEventListener('keydown', event => {
            if (event.key === 'ArrowRight') {
                this.snake.move('right');
            }

            if (event.key === 'ArrowLeft') {
                this.snake.move('left');
            }

            if (event.key === 'ArrowDown') {
                this.snake.move('down');
            }

            if (event.key === 'ArrowUp') {
                this.snake.move('up');
            }
            element.innerHTML = '';

            this.addBoardToDom(element);
        });
    }

    private addBoardToDom(element) {
        this.board.forEach(line => {
            line.forEach(part => {
                element.appendChild(part)
            });
        });
    }
}