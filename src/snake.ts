import {SnakeTail} from "./snake-tail";
export class Snake {
    public currentPosition;

    constructor(private board, private x = 1, private y = 1) {
        this.board[this.x][this.y].textContent = '#';
        this.currentPosition = this.board[this.x][this.y];
    }

    move(direction) {
        if (direction === 'right') {
            this.y++;
        }

        if (direction === 'left') {
            this.y--;
        }

        if (direction === 'down') {
            this.x++;
        }

        if (direction === 'up') {
            this.x--;
        }
        this.updateBoard();
    }

    private updateBoard() {
        this.board[this.x][this.y] = new SnakeTail();
    }
}