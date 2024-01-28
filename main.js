let link = "https://youtu.be/ZezKv3yCMno?si=88M4hG0Qh7D0sQ-g";
let coins = 100;
let unlockedCharacters = 0;
let ownedWorkers = 0;
let ownedEmployers = 0;
let ownedCEOs = 0;
const frontCoins = document.querySelector("#coins");

const changeEp = (event) => {
    if(event.target.value == "ep1") {
        link = "https://youtu.be/ZezKv3yCMno?si=88M4hG0Qh7D0sQ-g"
    } else if(event.target.value == "ep2") {
        link = "https://youtu.be/nuZBdwvZEdk?si=mMeWwA7SpJHetQ0o"
    } else if(event.target.value == "ep3") {
        link = "https://youtu.be/vnYROTY55yg?si=Fa2Cp80jek3UMeSC"
    }

    coins = 100;
    frontCoins.innerHTML = 100;
    unlockedCharacters = 0;
    document.querySelector("#link").innerHTML = "";
    ownedWorkers = 0;
    document.querySelector("#workers").innerHTML = 0;
    ownedEmployers = 0;
    document.querySelector("#employers").innerHTML = 0;
    ownedCEOs = 0;
    document.querySelector("#ceos").innerHTML = 0;
}

const buyCharacter = () => {
    if(coins > 999 && unlockedCharacters < link.length) {
        coins -= 1000;
        unlockedCharacters += 1;
        let unlockedLink = "";
        for(let i = 0; i < unlockedCharacters; i++) {
            unlockedLink += link[i];
        }
        document.querySelector("#link").innerHTML = unlockedLink;
    }
}
const buyWorker = () => {
    console.log("Buy worker attempt");
    if(coins > 99 && ownedWorkers < 100) {
        coins = coins - 100;
        ownedWorkers += 1;
        document.querySelector("#workers").innerHTML = Number(document.querySelector("#workers").innerHTML) + 1
    }
    console.log(coins);
}
const buyEmployer = () => {
    if(coins > 999 && ownedEmployers < 10) {
        coins -= 1000;
        ownedEmployers += 1;
        document.querySelector("#employers").innerHTML  = Number(document.querySelector("#employers").innerHTML) + 1
    }
}
const buyCEO = () => {
    if(coins > 9999 && ownedCEOs < 1) {
        coins -= 10000;
        ownedCEOs += 1;
        document.querySelector("#ceos").innerHTML = Number(document.querySelector("#ceos").innerHTML) + 1
    }
}

let updateGame = () => {
    coins += ownedWorkers;
    coins = (coins < 10001 ? coins : 10000);
    frontCoins.innerHTML = (Number(frontCoins.innerHTML) + ownedWorkers);
    ownedWorkers += (ownedEmployers / 10);
    document.querySelector("#workers").innerHTML = (Number(document.querySelector("#workers").innerHTML) + (ownedEmployers/10));
    ownedWorkers = (ownedWorkers < 101 ? ownedWorkers : 100);
    ownedEmployers += ownedCEOs;
    document.querySelector("#employers").innerHTML = Number(document.querySelector("#employers").innerHTML) + ownedCEOs;
    ownedEmployers = (ownedEmployers < 11 ? ownedEmployers : 10);
}

let checkStats = () => {
    if(Number(frontCoins.innerHTML) != coins) {
        coins = Math.min(coins, Number(frontCoins.innerHTML));
        frontCoins.innerHTML = coins;
    }

    if(Number(document.querySelector("#workers").innerHTML) != ownedWorkers) {
        ownedWorkers = Math.min(ownedWorkers, Number(document.querySelector("#workers").innerHTML));
        document.querySelector("#workers").innerHTML = ownedWorkers;
    }

    if(Number(document.querySelector("#employers").innerHTML) != ownedEmployers) {
        ownedEmployers = Math.min(ownedEmployers, Number(document.querySelector("#employers").innerHTML));
        document.querySelector("#employers").innerHTML = ownedEmployers;
    }

    if(Number(document.querySelector("#ceos").innerHTML) != ownedCEOs) {
        ownedCEOs = Math.min(ownedCEOs, Number(document.querySelector("#ceos").innerHTML));
        document.querySelector("#ceos").innerHTML = ownedCEOs;
    }
}

setInterval(checkStats, 10);
window.setInterval(updateGame, 1000);
