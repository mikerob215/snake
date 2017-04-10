export namespace DomTools {
    export class GameElement {
        constructor(name: string, content: string) {
            const element = document.createElement(name);
            const elementContent = document.createTextNode(content);
            element.appendChild(elementContent);
            return element;
        }
    }

    export class Edge extends GameElement {

        constructor() {
            super('edge', '*');
        }
    }

    export class Space extends GameElement {

        constructor() {
            super('space', '_');
        }
    }

    export class Line {
        constructor() {
        }

        middle(length: number = 40): GameElement[] {
            const middle = [];

            for (let i = 0; i <= length; i++) {
                if (i === 0) {
                    middle.push(new Edge())
                } else if (i === length) {
                    middle.push(new Edge());
                    middle.push(document.createElement('br'));
                } else {
                    middle.push(new Space());
                }
            }

            return middle;
        }

        fillMiddle(length: number = 20) {
            const middleRows = [];
            for (let i = 0; i <= length; i++) {
                middleRows.push(this.middle())
            }
            return middleRows;
        }

        top(length: number = 40): Edge[] {
            const top = [];

            for (let i = 0; i <= length; i++) {
                top.push(new Edge());
                if (i === length) {
                    top.push(document.createElement('br'))
                }
            }
            return top;
        }
    }
}