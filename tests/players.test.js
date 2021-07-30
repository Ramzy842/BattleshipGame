import { Player } from "../src/players"


test("check if player class is working as it should", () => {
    expect(new Player( "player01",
        [
            {
                locations : [[0, 0],  [0, 4], [0, 5]],
                damage: []
            }
        ],

        [],
        [], []
    )).toEqual( 
        {
            name: "player01",
            ships : [
                {
                    locations : [[0, 0],  [0, 4], [0, 5]],
                    damage: []
                }
            ],

    allDamagedLocations: [],
    allDamagedShips: [],
    missedShots: []
    })
})