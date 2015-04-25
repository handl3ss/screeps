function Spawner(){
	
}

Spawner.prototype.spawnCreep = function(){
	var counter = 0;	
    var roleToSpawn = this.chooseRoleToSpawn(); 
      // при рождении не указывать имя ибо не важно, но указать роль рождаемого.
    // комбинацию брать из первой генерации, смотреть есть ли генерация "еволюция" если есть брать с нее
    // рожаем
    if(typeof(Memory.roles.evolutioned) !== 'undefined'){
    	Game.spawns.Spawn1.createCreep(Memory.roles.evolutioned[roleToSpawn],null,{role:roleToSpawn});
    } else {
       var n =	Game.spawns.Spawn1.createCreep(Memory.roles.firstGeneration[roleToSpawn],null,{role:roleToSpawn});	
    }
}

Spawner.prototype.chooseRoleToSpawn = function(){
    for(var i = 0; i < Memory.startCombination.length; i++){
     // пройтись по комбинации и посмотреть кого родили кого нет, 
    //так же смотреть на число сколько нужно родить.
      var current = Memory.startCombination[i];
      var creeps = Game.creeps;
      // если в памяти крипов с текущей ролью меньше то создаем
      if(Memory.workMemory[current.name].count < current.count){
      	 Memory.workMemory[current.name].count = Memory.workMemoryy[current.name].count+1;
         return current.name;
      } 
    }
}

Spawner.prototype.isItPossibleToSpawn = function(creep){

}



module.exports = Spawner;