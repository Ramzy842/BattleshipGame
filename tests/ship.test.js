/**
 * @jest-environment jsdom
 */
import {checkForDamagedLocations, hit, pushToAllDamagedShips, checkWinner, Ship, pushToAllShotLocations} from "../src/ship.js"

test("check if ship class is working as it should", () => {
    expect(new Ship([[0, 0]], [])).toEqual({locations : [[0, 0]],
        damage: []})
})


test("hit player ship coordinates and mark location as hit", () => {
    let player = {
        ships : [
            {
                locations : [[0, 0]],
                damage: []
            }
        ],

        allDamagedLocations: [],
        allDamagedShips: [],
        duplicateLocations: [],
        allShotLocations: [],
        uniqueLocations: []
    }

    hit(player, [0, 0]);
    expect(player.ships[0].damage).toContainEqual([0, 0])
    
})

test("check missed shots", () => {
    let player = {
        ships : [
            {
                locations : [[0, 0], [0, 1], [0, 2]],
                damage: []
            }
        ],

        allDamagedLocations: [],
        allDamagedShips: [],
        missedShots: [],
        duplicateLocations: [],
        allShotLocations: [],
        uniqueLocations: []
    }

    hit(player, [0, 4]);
    expect(player.missedShots).toContainEqual([0, 4])
})

test("hit player multiple ship coordinates and mark locations as hit", () => {
    let player = {
        ships : [
            {
                locations : [[0, 0], [0, 1], [0, 2]],
                damage: []
            }
        ],

        allDamagedLocations: [],
        allDamagedShips: [],
        missedShots: [],
        duplicateLocations: [],
        allShotLocations: [],
        uniqueLocations: []
    }

    hit(player, [0, 0]);
    hit(player, [0, 1]);
    hit(player, [0, 2]);
    expect(player.ships[0].damage).toContainEqual([0, 1])
    expect(player.ships[0].damage).toContainEqual([0, 2])
    
    
})

test("hit player ship", () => {
    let player = {
        ships : [
            {
                locations : [[0, 0], [0, 1], [0, 2]],
                damage: []
            },
            {
                locations : [[2, 2], [3, 2], [4, 2]],
                damage: []
            }
        ],

        allDamagedLocations: [],
        allDamagedShips: [],
        missedShots: [],
        duplicateLocations: [],
        allShotLocations: [],
        uniqueLocations: []
    }
    hit(player, [3, 2])

    //expect(player.ships[1].damage).toContainEqual([2, 2])
    expect(player.ships[1].damage).toContainEqual([3, 2])
    
    
})

test("hit player multiple ships", () => {
    let player = {
        ships : [
            {
                locations : [[0, 0], [0, 1], [0, 2]],
                damage: []
            },
            {
                locations : [[2, 2], [3, 2], [4, 2]],
                damage: []
            }
        ],

        allDamagedLocations: [],
        allDamagedShips: [],
        missedShots: [],
        duplicateLocations: [],
        allShotLocations: [],
        uniqueLocations: []
    }
    hit(player, [0, 1])
    hit(player, [3, 2])


    expect(player.ships[0].damage).toContainEqual([0, 1])
    expect(player.ships[1].damage).toContainEqual([3, 2])
    
})


test("hit coordinates should be in all damaged locations", () => {
    let player = {
        ships : [
            {
                locations : [[0, 0]],
                damage: []
            }
        ],

        allDamagedLocations: [],
        allDamagedShips: [],
        missedShots: [],
        duplicateLocations: [],
        allShotLocations: [],
        uniqueLocations: []
    }

    hit(player, [0, 0]);
    expect(player.allDamagedLocations).toContainEqual([0, 0])
})

test("multiple hit coordinates should be in all damaged locations", () => {
    let player = {
        ships : [
            {
                locations : [[0, 0]],
                damage: []
            }
        ],

        allDamagedLocations: [],
        allDamagedShips: [],
        missedShots: [],
        duplicateLocations: [],
        allShotLocations: [],
        uniqueLocations: []
    }

    hit(player, [0, 0]);
    hit(player, [0, 1]);
    hit(player, [0, 2]);
    expect(player.allDamagedLocations).toContainEqual([0, 0])
})


test("check if damaged location is in All Damaged Locations array", () => {
    let player = {
        ships : [
            {
                locations : [[0, 0] , [1, 9]],
                damage: []
            }
        ],

        allDamagedLocations: [],
        allDamagedShips: [],
        missedShots: [],
        duplicateLocations: [],
        allShotLocations: [],
        uniqueLocations: []
    }
    hit(player, [0, 0])
    hit(player, [1, 9])
    hit(player, [0, 8])
    expect(player.allDamagedLocations).toContainEqual([0, 0])
    expect(player.allDamagedLocations).toContainEqual([1, 9])
    expect(checkForDamagedLocations(player, [0,0])).toBe(true)
    expect(checkForDamagedLocations(player, [1,9])).toBe(true)
    expect(checkForDamagedLocations(player, [0, 8])).toBe(false)
    
})


test("check if damaged (sunk) ships are being pushed to an all Damaged Ships array", () => {
    let player = {
        ships : [
            {
                locations : [[0, 0],  [0, 4], [0, 5]],
                damage: []
            },
            {
                locations : [[4, 5],  [1, 4], [9, 5]],
                damage: []
            }
        ],

        allDamagedLocations: [],
        allDamagedShips: [],
        missedShots: [],
        duplicateLocations: [],
        allShotLocations: [],
        uniqueLocations: []
    }
    
    hit(player, [0, 0]);
    hit(player, [0, 4]);
    hit(player, [0, 5]);

    //hit(player, [4, 5]);
    //hit(player, [1, 4]);
    //hit(player, [9, 5]);
    
    //checkForAllDestroyedShipLocations(player)
    pushToAllDamagedShips(player)
    expect(player.allDamagedShips).toContainEqual({
        locations : [[0, 0],  [0, 4], [0, 5]],
        damage: [[0, 0], [0, 4], [0, 5]]
    })
    /*expect(player.allDamagedShips).toContainEqual(
        {
            locations : [[4, 5],  [1, 4], [9, 5]],
            damage: [[4, 5],  [1, 4], [9, 5]]
        })
    */

})

test("check duplicate locations", () => {
    let player = {

        name: "Player01",
        ships : [
            {
                locations : [[0, 0]],
                damage: []
            },
            {
                locations : [[5, 5]],
                damage: []
            }
            ,{
                locations : [[1, 0]],
                damage: []
            },
            
        ],


        allDamagedLocations: [],
        allDamagedShips: [],
        missedShots: [],
        duplicateLocations: [],
        allShotLocations: [],
        uniqueLocations: []
    }
    
    hit(player, [5, 5])
    pushToAllShotLocations(player, [5, 5])
    expect(player.allShotLocations).toContainEqual([5, 5]);
    expect(player.uniqueLocations).toContainEqual([5, 5]);
    hit(player,[5, 5])
    pushToAllShotLocations(player, [5, 5])
    expect(player.uniqueLocations).toContainEqual([5, 5]);

    expect(player.duplicateLocations).toContainEqual([5, 5]);
    
})


test("check winner", () => {
    let player01 = {
        name: "player01",
        ships : [
            {
                locations : [[0, 0],  [0, 4], [0, 5]],
                damage: [[0, 0],  [0, 4], [0, 5]]
            },

            {
                locations : [[0, 1],  [0, 2], [0, 3]],
                damage: []
            },

            {
                locations : [[1, 3],  [1, 4], [1, 5]],
                damage: []
            }
        ],

        allDamagedLocations: [],
        allDamagedShips: [{
            locations : [[0, 0],  [0, 4], [0, 5]],
            damage: []
        }],
        missedShots: [],
        duplicateLocations: [],
        allShotLocations: [],
        uniqueLocations: []
    }

    let player02 = {
        name: "player02",
        ships : [
            {
                locations : [[7, 0],  [7, 1], [7, 2]],
                damage: [[7, 0],  [7, 1], [7, 2]]
            },

            {
                locations : [[8, 1],  [8, 2], [8, 3]],
                damage: [[8, 1],  [8, 2], [8, 3]]
            },

            {
                locations : [[9, 3],  [9, 4], [9, 5]],
                damage: [[9, 3],  [9, 4], [9, 5]]
            }
        ],

        allDamagedLocations: [],
        allDamagedShips: [{
            locations : [[8, 1],  [8, 2], [8, 3]],
            damage: []
        },
        {
            locations : [[9, 3],  [9, 4], [9, 5]],
            damage: []
        },
        {
            locations : [[9, 3],  [9, 4], [9, 5]],
            damage: []
        }
        ],
        missedShots: [],
        duplicateLocations: [],
        allShotLocations: [],
        uniqueLocations: []
    }

    expect(checkWinner(player01, player02)).toBe(player01.name + " wins")
    expect(checkWinner(player02, player01)).toBe(player01.name + " win")
})


