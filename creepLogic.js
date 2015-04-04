function CreepLogic(){

}

CreepLogic.prototype.proccessCreeps = function(){

   for(var name in Game.creeps){
    var creep = Game.creeps[name];
    require(creep.memory.role)(creep); 

}

}

module.exports = CreepLogic;