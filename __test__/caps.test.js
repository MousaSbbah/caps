'use strict';

// const event = require('../event.js');
require('jest');
const { pickupHandler } = require('../eventHandler.js');
const { inTransitHandler } = require('../eventHandler.js');
const { deliveredHandler } = require('../eventHandler.js');
const driverPickup = require('../Modules/driver.js');

const order = {
  name: 'Mousa',
  address: 'Amman',
  id: '54684548664',
  store: 'City Mall',
};

describe('Caps System', () => {
  let consoleSpy;
  beforeEach(() => {
    jest.useFakeTimers();
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should console the pickup EVENT', () => {
    pickupHandler(order);

    expect(consoleSpy).toHaveBeenCalled();

  });
  it('should console the in-transit EVENT', () => {
    inTransitHandler(order);

    expect(consoleSpy).toHaveBeenCalled();

  });

  it('should console the delivered EVENT', () => {
    deliveredHandler(order);

    expect(consoleSpy).toHaveBeenCalled();

  });

  it('should console driver message  after 3 sec ', () => {

    driverPickup(order);
    setTimeout(()=>{
      expect(consoleSpy).toHaveBeenCalled();
    },3000) ;

  });

});
