let towerStructure = {

    run: () => {
        let towers = Game.spawns.Spawn1.room.find(FIND_MY_STRUCTURES, {
            filter: { structureType: STRUCTURE_TOWER }
        });
        _.forEach(towers, (tower) => {
            let closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => structure.hits < structure.hitsMax
            });
            if (closestDamagedStructure) {
                tower.repair(closestDamagedStructure);
            }

            let closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if (closestHostile) {
                tower.attack(closestHostile);
            }
        })
    }
};

module.exports = towerStructure;
