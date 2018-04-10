const POPULATION = {
    'harvester': 10,
    'builder': 3,
    'upgrader': 2
};

const ROLES = {
    'harvester': [WORK, CARRY, MOVE, MOVE],
    'builder': [WORK, CARRY, MOVE, MOVE], // TODO Add correct body
    'upgrader': [WORK, CARRY, MOVE, MOVE], // TODO Add correct body
};

let population = {

    run: () => {
        for (let key in POPULATION) {
            let currentPopulation = _.sum(Game.creeps, (creep) => creep.memory.role === key);
            if (currentPopulation < POPULATION[key]) {
                let creepName = Math.random().toString();

                let spawnHasEnoughEnergy = Game.spawns['Spawn1'].spawnCreep(ROLES[key], creepName, {dryRun: true});

                if (!Game.spawns['Spawn1'].spawning && spawnHasEnoughEnergy !== -6) {
                    Game.spawns['Spawn1'].spawnCreep(ROLES[key], creepName, {
                        memory: {role: key}
                    });
                    console.log(`Spawned a new ${key}: ${creepName}`);
                }
            }
        }
    }
};

module.exports = population;
