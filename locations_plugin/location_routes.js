var locationsController = require('./location_controller');

exports.endpoints = [
  { method: 'POST', path: '/locations', config: locationsController.create},
  { method: 'GET', path: '/locations', config: locationsController.getAll}, 
  { method: 'GET', path: '/locations/{locationId}', config: locationsController.getOne}, 
  { method: 'PUT', path: '/locations/{locationId}', config: locationsController.update}, 
  { method: 'DELETE', path: '/locations/{locationId}', config: locationsController.remove}];