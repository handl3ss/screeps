
var Spawn = require('spawner');
var CreepLogics = require('creepLogic');

var roles = {
	firstGeneration:{
		guard: [Game.TOUGH,Game.TOUGH,Game.TOUGH,Game.MOVE,Game.ATTACK,Game.ATTACK],
		archer: [Game.TOUGH,Game.TOUGH,Game.MOVE,Game.RANGED_ATTACK,Game.RANGED_ATTACK],
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

var spawner = new Spawn(Memory);
var creepLogics = new CreepLogics();

function initMemory(){
  var firstSpawn = Game.spaws.Spawn1;
  if(firstSpawn && Memory.stateRoom !== firstSpawn.room.name){
		  Memory.startCombination = startCombination;
		  Memory.roles = roles;
		  Memory.workMemory = {
				guard: {count: 0},
				healer: {count: 0},
				ranger: {count: 0},
				work: {count: 0},
				carrier: {count: 0}
			};
		  Memory.generation = 'firstGeneration';
	}
}

function startGame(){
  initMemory();
  spawner.spawnCreep();
  creepLogics.proccessCreeps();

};






module.exports = startGame;