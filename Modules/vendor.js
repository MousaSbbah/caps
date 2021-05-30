'use strict';

const events = require('../event.js');

const faker = require('faker');
//Vendor delivered handler function
events.on('delivered', (payload) => {
  console.log(`VENDOR: Thank you for delivering ${payload.id}`);
});
// generate new order and emit 'pickup' event each 5 sec
setInterval(() => {
  let newOrder = {
    name: faker.name.findName(),
    address: faker.address.city(),
    id: faker.datatype.uuid(),
    store: faker.company.companyName(),
  };
  events.emit('pickup', newOrder);
}, 5000);
