import "jest";
import "../src/main";
import {Game} from "../src/game";

describe("Game", () => {
    it("should launch call bootstrap method", () => {
        const game = new Game('app');
        game.bootstrap = jest.fn();
        expect(game.bootstrap).toHaveBeenCalled();
    })
});
