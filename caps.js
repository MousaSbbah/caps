'use strict';

// import singleton pattern event
const events = require('./event.js');
// import the vendor and driver files
require('./Modules/vendor');
require('./Modules/driver');
//import the event handlers functions
const handlers =require('./eventHandler');
//handle the event emitter
events.on('pickup', handlers.pickupHandler);
events.on('in-transit',handlers.inTransitHandler);
events.on('delivered', handlers.deliveredHandler);



