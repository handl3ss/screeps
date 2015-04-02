
var Spawn = require('spawner');
var CreepLogic = require('creepLogic');

var roles = {
	firstGeneration:{
		guard: [Game.TOUGHT,Game.TOUGHT,Game.TOUGHT,Game.MOVE,Game.ATTACK,Game.ATTACK],
		archer: [Game.TOUGHT,Game.TOUGHT,Game.MOVE,Game.RANGED_ATTACK,Game.RANGED_ATTACK],
		carrier: [Game.MOVE,Game.CARRY],
		healer: [Game.MOVE,Game.HEAL,Game.HEAL],
		worker: [Game.MOVE,Game.WORK,Game.WORK,Game.WORK]
	}
};

var startCombination = [
	{name:'worker',count:2},
	{name:'carrier',count:2},
	{name:'ranger',count:3}
];

var spawner = new Spawn(roles,startCombination);
var creepLogic = new CreepLogic();

function startGame(){
  Game.spawns.Spawn1.memory.generation = 'firstGeneration';
  spawner.spawnCreep();
  creepLogic.proccessCreeps();

};






module.export = startGame;