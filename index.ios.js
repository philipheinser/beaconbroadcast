/**
 * @providesModule BeaconBroadcast
 * @flow
 */
'use strict';

import React, {
  NativeModules,
} from 'react-native';

var NativeBeaconBroadcast = NativeModules.BeaconBroadcast;

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

export default BeaconBroadcast;
