import {Player} from './classes/Player.js'

const mashrafee = new Player('mashrafee', 40, 'Bangladesh');
const sakib = new Player('sakib', 35, 'Bangladesh');

const players: Player[] = [];
players.push(sakib);
players.push(mashrafee);
console.log(players);
