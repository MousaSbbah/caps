'use strict';

const events = require('../event.js');

events.on('pickup', driverPickup);
/** diver pickup event handler
 * @param  {Object} payload
 */
function driverPickup(payload) {
    //after 1 sec emit in-transit event
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.id}`);
    events.emit('in-transit', payload);
  }, 1000);
  //after 3 sec emit delivered event
  setTimeout(() => {
    console.log(`DRIVER: delivered up ${payload.id}`);
    events.emit(`delivered`, payload);
  }, 3000);
}
//export the handler function
module.exports=driverPickup;
