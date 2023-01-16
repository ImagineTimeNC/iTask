/**
 * Configure the API routes
 */

let User = require('mongoose').model('User');
let logger = global.logger;

// helper functions

function requireLogin() {

}


function requireRole(role) {

}

// export Yote resource API paths
let routeFilenames = [];
module.exports = function(router) {
  /**
   *
   *
   */
  routeFilenames.forEach(function(filename) {
    logger.debug("filename: " + filename);
    require('../../resources/' + filename)(router, requireLogin, requireRole);
  });
}

// New Yote resource API route names generated by the Yote CLI
routeFilenames.push('user/usersApi');
routeFilenames.push('task/tasksApi');
routeFilenames.push('flow/flowsApi');

routeFilenames.push('note/notesApi');