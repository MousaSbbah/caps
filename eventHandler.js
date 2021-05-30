'use strict';

/** Pick up event handler
 * @param  {Object} payload
 */
function pickupHandler(payload) {
  console.log('EVENT', {
    event: 'pickup',
    time: new Date(),
    payload: payload,
  });
}
/** in-transit event handler
 * @param  {Object} payload
 */
function inTransitHandler(payload) {
  console.log('EVENT', {
    event: 'in-transit',
    time: new Date(),
    payload: payload,
  });
}
/** delivered event handler
 * @param  {Object} payload
 */
function deliveredHandler(payload) {
  console.log('EVENT', {
    event: 'delivered',
    time: new Date(),
    payload: payload,
  });
}

//export the functions
module.exports = { pickupHandler, inTransitHandler, deliveredHandler };
