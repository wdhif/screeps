const roleHarvester = require('role.harvester');
const roleCourrier = require('role.courrier');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');

let roles = {

    run: () => {
        for (let name in Game.creeps) {
            if (Game.creeps.hasOwnProperty(name)) {
                let creep = Game.creeps[name];
                switch (creep.memory.role.toString()) {
                    case 'harvester':
                        roleHarvester.run(creep);
                        break;
                    case 'courrier':
                        roleCourrier.run(creep);
                        break;
                    case 'upgrader':
                        roleUpgrader.run(creep);
                        break;
                    case 'builder':
                        roleBuilder.run(creep);
                        break;
                }
            }
        }
    }
};

module.exports = roles;
