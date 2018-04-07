let population = {

    run: () => {
        const HARVESTER_POPULATION = 10;
        let numberOfHarvester = _.sum(Game.creeps, (creep) => creep.memory.role === 'harvester')

        if (numberOfHarvester < HARVESTER_POPULATION) {
            let creepName = Math.random().toString();

            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE, MOVE], creepName, {
                memory: {role: 'harvester'}
            });
            console.log('Spawned a new Harvester: ' + creepName)
        }
    }
};

module.exports = population;
