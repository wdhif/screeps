const population = require('population');
const roles = require('roles');
const tower = require('tower');

module.exports.loop = () => {
    tower.run();
    roles.run();
    population.run();
};
