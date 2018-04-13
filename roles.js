const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');

let roles = {

    run: () => {
        for (let name in Game.creeps) {
            if (Game.creeps.hasOwnProperty(name)) {
                let creep = Game.creeps[name];
                if (creep.memory.role.toString() === 'harvester') {
                    roleHarvester.run(creep);
                }
                if (creep.memory.role.toString() === 'upgrader') {
                    roleUpgrader.run();
                }
                if (creep.memory.role.toString() === 'builder') {
                    roleBuilder.run(creep);
                }
            }
        }
    }
};

module.exports = roles;
