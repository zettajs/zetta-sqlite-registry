var zetta = require('zetta');
var LED = require('zetta-led-mock-driver');

var Registries = require('./')(zetta);
var PeerRegistry = Registries.PeerRegistry;
var DeviceRegistry = Registries.DeviceRegistry;

zetta({ registry: new DeviceRegistry(), peerRegistry: new PeerRegistry()})
  .use(LED)
  .listen(3000);
