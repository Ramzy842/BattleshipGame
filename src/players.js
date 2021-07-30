export class Player {
    constructor (playerName, ships, allDamagedLocations, allDamagedShips, missedShots,
         duplicateLocations, allShotLocations, uniqueLocations) {
        this.name = playerName;
        this.ships = ships;
        this.allDamagedLocations = allDamagedLocations;
        this.allDamagedShips = allDamagedShips;
        this.missedShots = missedShots;
        this.duplicateLocations = duplicateLocations;
        this.allShotLocations = allShotLocations;
        this.uniqueLocations = uniqueLocations;
    }
}



export let randomNumbersArr = []
export let randomNumbersArr2 = []
function checkForAvailabilityAndPushTorandomNumbersArr (randomNumber) {
    if (!randomNumbersArr.includes(randomNumber)) {
        randomNumbersArr.push(randomNumber)
    } else {
        randomNumber = Math.floor ( Math.random () * 10 )
        checkForAvailabilityAndPushTorandomNumbersArr (randomNumber)
    }
}

function checkForAvailabilityAndPushTorandomNumbersArr2 (randomNumber) {
    if (!randomNumbersArr2.includes(randomNumber)) {
        randomNumbersArr2.push(randomNumber)
    } else {
        randomNumber = Math.floor ( Math.random () * 10 )
        checkForAvailabilityAndPushTorandomNumbersArr2 (randomNumber)
    }
}

for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor ( Math.random () * 10 );
    checkForAvailabilityAndPushTorandomNumbersArr (randomNumber)
}

for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor ( Math.random () * 10 );
    checkForAvailabilityAndPushTorandomNumbersArr2 (randomNumber)
}



export let player01 = new Player("You", [
    {
        locations: [[randomNumbersArr[0], randomNumbersArr[1]]],
        damage: []
    },
    {
        locations: [[randomNumbersArr[1], randomNumbersArr[2]]],
        damage: []
    },
    {
        locations: [[randomNumbersArr[2],randomNumbersArr[3]]],
        damage: []
    },
    {
        locations: [[randomNumbersArr[3],randomNumbersArr[4]]],
        damage: []
    },
    {
        locations: [[randomNumbersArr[4],randomNumbersArr[5]]],
        damage: []
    },
    {
        locations: [[randomNumbersArr[5], randomNumbersArr[6]]],
        damage: []
    },
    {
        locations: [[randomNumbersArr[6], randomNumbersArr[7]]],
        damage: []
    },
    {
        locations: [[randomNumbersArr[7],randomNumbersArr[8]]],
        damage: []
    },
    {
        locations: [[randomNumbersArr[8],randomNumbersArr[9]]],
        damage: []
    },
    {
        locations: [[randomNumbersArr[9],randomNumbersArr[9]]],
        damage: []
    }
], [], [], [], [], [], [])

export let computer = new Player("computer", [
    {
        locations: [[randomNumbersArr2[0], randomNumbersArr2[1]]],
        damage: []
    },
    {
        locations: [[randomNumbersArr2[1], randomNumbersArr2[2]]],
        damage: []
    },
    {
        locations: [[randomNumbersArr2[2],randomNumbersArr2[3]]],
        damage: []
    },
    {
        locations: [[randomNumbersArr2[3],randomNumbersArr2[4]]],
        damage: []
    },
    {
        locations: [[randomNumbersArr2[4],randomNumbersArr2[5]]],
        damage: []
    },
    {
        locations: [[randomNumbersArr2[5], randomNumbersArr2[6]]],
        damage: []
    },
    {
        locations: [[randomNumbersArr2[6], randomNumbersArr2[7]]],
        damage: []
    },
    {
        locations: [[randomNumbersArr2[7],randomNumbersArr2[8]]],
        damage: []
    },
    {
        locations: [[randomNumbersArr2[8],randomNumbersArr2[9]]],
        damage: []
    },
    {
        locations: [[randomNumbersArr2[9],randomNumbersArr2[9]]],
        damage: []
    }
], [], [], [], [], [], [])



