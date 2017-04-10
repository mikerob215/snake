import {DomTools} from "./dom-tools";
import {Snake} from "./snake";
import Edge = DomTools.Edge;
import Space = DomTools.Space;
import GameElement = DomTools.GameElement;
import Line = DomTools.Line;

export class GameBoard {
    private board: GameElement[][];
    private snake: Snake;

    constructor(private element: HTMLUnknownElement) {
        this.buildBoard()
    }

    buildBoard() {
        this.board = [
            new Line().top(),
            ...new Line().fillMiddle(),
            new Line().top()
        ];
        this.addBoardToDom();
        this.insertSnake();
        this.launchController();
        this.startTimer();
        document.addEventListener('lost', event => {
            window.location.reload(true);
        })
    }

    private insertSnake() {
        this.snake = new Snake(this.board);
        this.addBoardToDom();
    }

    private launchController() {
        document.addEventListener("keydown", event => {
            if (event.key === "ArrowRight") {
                this.snake.move("right");
            }

            if (event.key === "ArrowLeft") {
                this.snake.move("left");
            }

            if (event.key === "ArrowDown") {
                this.snake.move("down");
            }

            if (event.key === "ArrowUp") {
                this.snake.move("up");
            }
            this.addBoardToDom();
        });
    }

    private addBoardToDom() {
        this.element.innerHTML = '';
        this.board.forEach(line => {
            line.forEach(part => {
                this.element.appendChild(part as HTMLUnknownElement);
            });
        });
    }

    private startTimer() {
        setInterval(() => {
            this.snake.moveLastDirection();
            this.addBoardToDom();
        }, 700)
    }
}