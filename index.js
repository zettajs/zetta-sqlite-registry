module.exports = function(zetta) {
  return {
    DeviceRegistry: require('./device_registry')(zetta),
    PeerRegistry: require('./peer_registry')(zetta)
  };
};
