
var Spawn = require('spawner');
var CreepLogics = require('creepLogic');

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

var spawner = new Spawn(Game.spawns.Spawn1.memory);
var creepLogic = new CreepLogics();

function startGame(){
  Game.spawns.Spawn1.memory.startCombination = startCombination;
  Game.spawns.Spawn1.memory.roles = roles;
  Game.spawns.Spawn.memory.workMemory = {
		guard: {count: 0},
		healer: {count: 0},
		ranger: {count: 0},
		work: {count: 0},
		carrier: {count: 0}
	};
  Game.spawns.Spawn1.memory.generation = 'firstGeneration';
  spawner.spawnCreep();
  creepLogics.proccessCreeps();

};






module.export = startGame;