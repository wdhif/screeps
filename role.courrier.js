let roleCourrier = {

    run: (creep) => {

        if (creep.carry.energy < creep.carryCapacity) {
            let containers = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType === STRUCTURE_CONTAINER) && structure.energy !== 0
                }
            });
            _.forEach(containers, (container) => {
                let closestFullContainer = container.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (container) => container.energy === container.energyCapacity
                });

                let closestContainer = container.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (container) => container.energy > 0
                });

                if (closestFullContainer) {
                    if (creep.withdraw(closestFullContainer, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(closestFullContainer, {visualizePathStyle: {stroke: '#ffaa00'}})
                    }
                }
                else if (closestContainer) {
                    if (creep.withdraw(closestContainer, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(closestFullContainer, {visualizePathStyle: {stroke: '#ffaa00'}})
                    }
                }
            });
        }
        else {
            let targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType === STRUCTURE_EXTENSION ||
                        structure.structureType === STRUCTURE_SPAWN ||
                        structure.structureType === STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                }
            });
            if (targets.length > 0) {
                if (creep.transfer(targets[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
    }
};

module.exports = roleCourrier;
