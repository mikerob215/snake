import {SnakeTail} from "./snake-tail";
export class Snake {
    public currentPosition;
    public nextPosition;
    private lastDirection = 'right';

    constructor(private board, private x = 1, private y = 1) {
        this.board[this.x][this.y] = new SnakeTail();
        this.currentPosition = this.board[this.x][this.y];
    }

    move(direction) {
        if (direction === 'right') {
            this.nextPosition = this.board[this.x][this.y + 1];
            this.y++;
        }

        if (direction === 'left') {
            this.nextPosition = this.board[this.x][this.y - 1];
            this.y--;
        }

        if (direction === 'down') {
            this.nextPosition = this.board[this.x + 1][this.y];

            this.x++;
        }

        if (direction === 'up') {
            this.nextPosition = this.board[this.x - 1][this.y];
            this.x--;
        }
        this.lastDirection = direction;
        this.updateBoard();
    }

    moveLastDirection() {
        this.move(this.lastDirection);
    }

    private updateBoard() {
        const lost = new Event('lost', {bubbles: true});
        if (this.nextPosition.nodeName === 'EDGE') {
            document.dispatchEvent(lost)
        }
        if (this.nextPosition.nodeName === 'SNAKE-TAIL') {
            document.dispatchEvent(lost)
        }
        this.board[this.x][this.y] = new SnakeTail();
    }
}