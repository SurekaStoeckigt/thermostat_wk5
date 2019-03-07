'use strict';

describe('Thermostat', function() {
    var thermostat;
    var i;
    it('starts at 20 degrees', function(){
        thermostat = new Thermostat();
        expect(thermostat.temperature).toEqual(20);
    });
    
    it('can increase the temerature with an up function', function(){
        thermostat = new Thermostat()
        thermostat.up()
        expect(thermostat.temperature).toEqual(21);
    });

    it('can decrease the temerature with a down function', function(){
        thermostat = new Thermostat()
        thermostat.down()
        expect(thermostat.temperature).toEqual(19);
    });

    it('can not decrease the temerature below 10', function(){
        thermostat = new Thermostat()
        for (i = 0; i<=11; i++) {
            thermostat.down()
        }
        expect(thermostat.temperature).toEqual(10);
    });

    it('can not increase the temperature above 25 if power saving mode is on', function(){
        thermostat = new Thermostat()
        thermostat.powersave('on')
        for (i = 0; i<=6; i++) {
            thermostat.up()
        }
        expect(thermostat.temperature).toEqual(25);
    });

    it('can not increase the temperature above 32 if power saving mode is off', function(){
        thermostat = new Thermostat()
        thermostat.powersave('off')
        for (i = 0; i<=15; i++) {
            thermostat.up()
        }
        expect(thermostat.temperature).toEqual(32);
    });

    it('can reset the temperature to 20 with a reset function', function(){
        thermostat = new Thermostat()
            thermostat.up()
            thermostat.reset()
        expect(thermostat.temperature).toEqual(20);
    });


    it('has power save mode on by default', function(){
        thermostat = new Thermostat()
        expect(thermostat.powersavemode).toEqual(true);
    });

    it('can ask about the thermostat usage: < 18 is low-usage', function(){
        thermostat = new Thermostat()
        for (i = 0; i<=11; i++) {
            thermostat.down()
        }
        expect(thermostat.usage()).toEqual('low-usage');    
    });

    it('can ask about the thermostat usage: < 25 is medium-usage', function(){
        thermostat = new Thermostat()
        expect(thermostat.usage()).toEqual('medium-usage');    
    });

    it('can ask about the thermostat usage: <= 25 is high-usage', function(){
        thermostat = new Thermostat()
        for (i = 0; i<=15; i++) {
            thermostat.up()
        }
        expect(thermostat.usage()).toEqual('high-usage');    
    });






});

