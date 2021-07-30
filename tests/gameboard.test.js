import {gameboard1, gameboard2} from "../src/gameboard.js";


test("check if gameboard has the correct coordinates", () => {
    expect(gameboard1).toContainEqual([1, 9])
    expect(gameboard2).toContainEqual([9, 8])
})

