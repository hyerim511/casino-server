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


            // setTimeout(() => {
            //     resolve();
                
            // }, 5000);
        });
}


// let suits = [];
// var myData = '';
// // let csvFileData;
// const dataSuits = async () => {
//     let data = await readCsvFile('./data/data-hyerim.csv');
//     myData = data;

//     const newArr = myData.map((item) => {
//         suits.push(item[1], "newitem");
//         // console.log(suits);
//     });
//     // console.log(suits);

//     return suits;
    
//     // try {
//     //     const csvFileData = await readCsvFile('./data/data-hyerim.csv');
//     //     // console.log(csvFileData, "csv data");
//     //     for(let i=1; i < csvFileData.length; i++) {
//     //         suits.push(csvFileData[i][1]);
//     //     }
//     //     console.log(suits);
//     //     return csvFileData;
//     // } catch (error) {
//     //     console.log(error);
//     // }
// }

// // let suitsresult = dataSuits()
// //     .then(res => {
// //         for(let i=1; i < res.length; i++) {
// //             suits.push(res[i][1]);
// //         }
// //         return suits;
// //     });
    
// // const suitData = dataSuits().then(result => console.log(result, "result"));
// // for(let i=1; i < suitData.length; i++) {
// //     suits.push(suitData[i][1]);
// // }
// // console.log(suitData, "final data");
// dataSuits();
// console.log(suits, "my data");



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
