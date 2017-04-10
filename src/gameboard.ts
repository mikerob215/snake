import {DomTools} from "./dom-tools";
import Edge = DomTools.Edge;
import Space = DomTools.Space;
import GameElement = DomTools.GameElement;
import Line = DomTools.Line;
export class GameBoard {
    private readonly width = 40;
    private readonly height = 20;
    private board;

    constructor(element: HTMLUnknownElement) {
        this.buildBoard(element)
    }

    buildBoard(element) {
        this.board = [
            new Line().top(),
            ...new Line().fillMiddle(),
            new Line().top()
        ];

        this.board.forEach(line => {
            line.forEach(part => {
                element.appendChild(part)
            });
        });
    }
}