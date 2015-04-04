function Spawner(){
	this.workMemory = Game.spawns.Spawn1.memory.workMemory;

}

Spawner.prototype.spawnCreep = function(){
	var counter = 0;	
    var roleToSpawn = Spawner.chooseRoleToSpawn(); 
    // при рождении не указывать имя ибо не важно, но указать роль рождаемого.
    // комбинацию брать из первой генерации, смотреть есть ли генерация "еволюция" если есть брать с нее
    // рожаем
    if(typeof(this.roles.evolutioned) !== 'undefined'){
    	Game.spawns.Spawn1.createCreep(this.roles.evolutioned[roleToSpawn],null,{role:roleToSpawn});
    } else {
    	Game.spawns.Spawn1.createCreep(this.roles.firstGeneration[roleToSpawn],null,{role:roleToSpawn});	
    }
}

Spawner.prototype.chooseRoleToSpawn = function(){
    for(var i = 0; i < Game.spawns.Spawn1.memory.startCombination; i++){
    // пройтись по комбинации и посмотреть кого родили кого нет, 
    //так же смотреть на число сколько нужно родить.
      var current = Game.spawns.Spawn1.memory.startCombination[i];
      var creeps = Game.creeps;
       // если в памяти крипов с текущей ролью меньше то создаем
      if(this.memory[current.name].count < current.count){
      	 this.memory[current.name].count = this.memory[current.name].count+1;
         return current.name;
      } 
    }
}

Spawner.prototype.isItPossibleToSpawn = function(creep){

}



module.exports = Spawner;