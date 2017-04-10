import {GameBoard} from "./gameboard";
export class Game {
    constructor(private appString: string) {
        if (!appString) {
            throw new Error("Must pass name of app element")
        }

    }

    bootstrap() {
        const appElement = document.getElementsByTagName(this.appString);
        if (appElement.length <= 0) {
            throw new Error("Missing app element")
        }

        new GameBoard(appElement.item(0) as HTMLUnknownElement);
    }
}