# beaconbroadcast ![npm](https://badge.fury.io/js/beaconbroadcast.svg)
React Native Module that broadcasts an iBeacon uuid.

### Setup

Install using https://github.com/rnpm/rnpm :

`rnpm install beaconbroadcast`

Import in your project:

`import BeaconBroadcast from 'beaconbroadcast';`

### API

Start iBeacon on device:

`BeaconBroadcast.startAdvertisingBeaconWithString('uuid', 'identifier');`

Stop iBeacon:

`BeaconBroadcast.stopAdvertisingBeacon()`
