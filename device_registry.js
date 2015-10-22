var util = require('util');
var levelup = require('levelup');
var sqldown = require('sqldown');

module.exports = function(zetta) {
  var Registry = zetta.DeviceRegistry;

  var SQLDeviceRegistry = function(location) {
    location = location || './.devices';
    var db = levelup(location, { db: sqldown });
    Registry.call(this, { db: db, collection: 'devices' });
  }
  util.inherits(SQLDeviceRegistry, Registry);
  
  return SQLDeviceRegistry;
};
