const game ={
    team1: 'Bayern Muich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'neuer',
            'pavard',
            'martinez',
            'alaba',
            'Davies',
            'kimmich',
            'Goretzka',
            'Comman',
            'Muller',
            'Gnarby',
            'Lewandowski',

        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',

        ],
    ],
    score: '4.0',
    scored:['Lewandowski','Ganrby','Lewandowski','Hummels'],
    date:'Nov 9th, 2023',
    odds:{
        team1:1.33,
        x:3.25,
        team2:6.5,
    },

};
//1
const [players1,players2]= game.players;
console.log(players1,players2)
//2
const [gk, ...fieldPlayer] =players1;
console.log(gk,fieldPlayer)

const [gk2, ...fieldPlayer2] =players2;
console.log(gk2,fieldPlayer2)

//3

const allPlayers = [...players1,...players2];
console.log(allPlayers)

//4

const players1Final= [...players1,'Thiago', 'Coutinho','Perisic'];
console.log(players1Final);

//5 

const {
    odds: {team1, x: draw ,team2},

} =game;
console.log (team1,draw,team2);
//6
const printGoals = [...scored ,...score]

