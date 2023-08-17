const { parse } = require("csv-parse");
const fs = require('fs');

async function readCsvFile(file) {
    return new Promise((resolve, reject) => {
        const results = [];
        const input = fs.createReadStream(file);
        input
            .pipe(parse({ delimiter: ',' }))
            .on('data', function(dataRow) {
                // console.log(dataRow);
                results.push(dataRow);
            })
            .on('end', function() {
                // console.log('Read CSV: ');
                // console.log(results);
                resolve(results);
            })
            .on('error', function(error) {
                reject(error);
            });
    });
}


// let suits = [];
// let csvFileData;
// async function dataSuits() {
//     try {
//         csvFileData = await readCsvFile('./data/data-hyerim.csv');
//         // for(let i=1; i < csvFileData.length; i++) {
//         //     newSuits.push(csvFileData[i][1]);
//         // }
//         return csvFileData;
//         // console.log(suits);
//     } catch (error) {
//         console.log(error);
//     }
    
//     // const csvFileData = await readCsvFile('./data/data-hyerim.csv');
//     // console.log(csvFileData);
//     return csvFileData;
// }

// let suitsresult = dataSuits()
//     .then(res => {
//         for(let i=1; i < res.length; i++) {
//             suits.push(res[i][1]);
//         }
//         return suits;
//     });
    
// let dataSuits = [];
// const suitData = dataSuits();
// for(let i=1; i < suitData.length; i++) {
//     suits.push(suitData[i][1]);
// }
// console.log(suitData);



let suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let deck = new Array();
let players = new Array();

function createDeck() {
    deck = new Array();
    for (let i = 0 ; i < values.length; i++)
    {
        for(let x = 0; x < suits.length; x++)
        {
            let weight = parseInt(values[i]);
            if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                weight = 10;
            if (values[i] == "A")
                weight = 11;
            let card = { Value: values[i], Suit: suits[x], Weight: weight };
            deck.push(card);
        }
    }
    shuffle();
    return deck;
}

function createPlayers(num) {
    players = new Array();
    for(let i = 1; i <= num; i++)
    {
        let hand = new Array();
        let player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
        players.push(player);
    }
    return players;
}

function shuffle() {
    // for 1000 turns
    // switch the values of two random cards
    for (let i = 0; i < 1000; i++) {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}

module.exports = {
    createDeck,
    createPlayers
};
