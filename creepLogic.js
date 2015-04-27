var roleHandlers = {};


function creepProcessor(){
    for(var name in Game.creeps){
        var creep = Game.creeps[name];
        var role = creep.memory.role;
        if(!roleHandlers[role]){
            roleHandlers[role] = require(role);
        }
        roleHandlers[role](creep);
    }
}

module.exports = creepProcessor;