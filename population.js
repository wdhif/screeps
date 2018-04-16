const POPULATION = {
    'harvester': 10,
    'courrier': 5,
    'builder': 3,
    'upgrader': 2
};

const ROLES = {
    'harvester': [WORK, WORK, CARRY, MOVE],
    'courrier': [CARRY, CARRY, MOVE, MOVE],
    'builder': [WORK, CARRY, MOVE, MOVE], // TODO Add correct body
    'upgrader': [WORK, CARRY, MOVE, MOVE], // TODO Add correct body
};

let population = {
    run: () => {
        for (let key in POPULATION) {
            let currentPopulation = _.sum(Game.creeps, (creep) => creep.memory.role === key);
            if (currentPopulation < POPULATION[key]) {
                let creepName = `${key}#${Math.floor(1000 + Math.random() * 9000)}`;

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
