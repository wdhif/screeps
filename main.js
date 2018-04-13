const population = require('population');
const roles = require('roles');

module.exports.loop = () => {
    roles.run();
    population.run();
};
