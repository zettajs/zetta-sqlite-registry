var util = require('util');
var levelup = require('levelup');
var sqldown = require('sqldown');

module.exports = function(zetta) {
  var PeerRegistry = zetta.PeerRegistry;  
  var SQLPeerRegistry = function(location) {
    location = location || './.peers';
    var db = levelup(location, { db: sqldown });
    PeerRegistry.call(this, { db: db, collection: 'peers' });
  }
  util.inherits(SQLPeerRegistry, PeerRegistry);

  return SQLPeerRegistry;
};
