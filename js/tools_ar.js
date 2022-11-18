const LEVEL_EXP = {
    2: 375,
    3: 500,
    4: 625,
    5: 725,
    6: 850,
    7: 950,
    8: 1075,
    10: 1300,
    11: 1425,
    12: 1525,
    13: 1650,
    14: 1775,
    15: 1875,
    16: 2000,
    17: 2375,
    18: 2500,
    19: 2625,
    20: 2775,
    21: 2825,
    22: 3425,
    23: 3725,
    24: 4000,
    25: 4300,
    26: 4575,
    27: 4875,
    28: 5150,
    29: 5450,
    30: 5725,
    31: 6025,
    32: 6300,
    33: 6600,
    34: 6900,
    35: 7175,
    36: 7475,
    37: 7750,
    38: 8050,
    39: 8325,
    40: 8625,
    41: 10550,
    42: 11525,
    43: 12475,
    44: 13450,
    45: 14400,
    46: 15350,
    47: 16325,
    48: 17275,
    49: 18250,
    50: 19200,
    51: 26400,
    52: 28800,
    53: 31200,
    54: 33600,
    55: 36000,
    56: 232350,
    57: 258950,
    58: 285750,
    59: 312825,
    60: 340125
}

const inputDesiredAr = document.getElementById("inputDesiredAr");
const inputCurrentExp = document.getElementById("inputCurrentExp");
const inputCurrentExpLabel = document.getElementById("inputCurrentExpLabel");
const inputResin = document.getElementById("inputResin");
const inputCommissions = document.getElementsByName("inputCommissions");

let currentLvl;
let nextLvl;
let expNeeded;

function handleInputAR(input) {
    currentLvl = Number(input.value);
    nextLvl = Number(currentLvl + 1);

    // Auto update desired value
    inputDesiredAr.value = Number(nextLvl);
    expNeeded = LEVEL_EXP[nextLvl];

    inputCurrentExpLabel.textContent = `How much exp do you have? (???/${expNeeded})`;
}

function calculate() {
    let currentExp = Number(inputCurrentExp.value)
    let dailyCommsExp = getDailyExp();
    let dailyComms = getHowManyComms();
    let dailyResin = Number(inputResin.value);

    let calc = ((dailyCommsExp * dailyComms) + 500) + (dailyResin * 5);
    let days = (expNeeded - currentExp) / calc; 

    console.log(days);
}

function getHowManyComms() {
    for (let i = 0; i < inputCommissions.length; i++) {
        if (inputCommissions[i].checked) {
            return i + 1;
        }
    }
}

function getDailyExp() {
    if (checkLvl(12, 15)) {
        return 175;
    }
    else if (checkLvl(16, 25)) {
        return 200;
    }
    else if (checkLvl(26, 35)) {
        return 225;
    }
    else if (checkLvl(36, 60)) {
        return 250;
    }

    return 1;
}

function checkLvl(m, mx) {
    return currentLvl >= m && currentLvl <= mx;
}