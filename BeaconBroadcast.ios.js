/**
 * @providesModule BeaconBroadcast
 * @flow
 */
'use strict';

var NativeBeaconBroadcast = require('NativeModules').BeaconBroadcast;

/**
 * High-level docs for the BeaconBroadcast iOS API can be written here.
 */

var BeaconBroadcast = {
  startAdvertisingBeaconWithString: function (uuid, identifier) {
    NativeBeaconBroadcast.startSharedAdvertisingBeaconWithString(uuid, identifier);
  },

  stopAdvertisingBeacon: function () {
    NativeBeaconBroadcast.stopSharedAdvertisingBeacon();
  },
};

module.exports = BeaconBroadcast;
