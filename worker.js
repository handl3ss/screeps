 module.exports = function(creep){
     if(creep.energy < creep.energyCapacity){
  var target = creep.pos.findClosest(Game.SOURCES);
   creep.moveTo(target);
   creep.harvest(taget); 
    }  else {
    creep.moveTo(Game.spawns.Spawn1);
    creep.transferEnergy(Game.spawns.Spawn1);
    
    }
 }