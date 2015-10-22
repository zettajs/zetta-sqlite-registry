# zetta sqlite3 registry

## Install

`npm install zetta-sqlite3-registry`

## Usage

```js
var zetta = require('zetta');
var Sqlite3Registries = require('zetta-sqlite3-registry')(zetta);
var PeerRegistry = Sqlite3Registries.PeerRegistry;
var DeviceRegistry = Sqlite3Registries.DeviceRegistry;

zetta({ registry: new DeviceRegistry(), peerRegistry: new PeerRegistry()})
  .use(LED)
  .listen(3000);

```

## License

MIT
