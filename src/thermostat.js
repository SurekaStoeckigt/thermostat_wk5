function Thermostat() {
    this.temperature = 20;
    this.minimumTemperature = 10
    this.powersavemode = true
    this.maxTemperature = 25 

};

Thermostat.prototype.up = function() {
    if (this.temperature < this.maxTemperature) {
    this.temperature++}
    else {return this.temperature}
    console.log(this.temperature)
}

Thermostat.prototype.down = function() {
    if (this.temperature > this.minimumTemperature) {
    this.temperature--} else
    { return this.temperature }
    console.log(this.temperature)
}

Thermostat.prototype.powersave = function(mode) {
    if (mode === 'on') {
        this.powersavemode = true
        this.maxTemperature = 25
        if (this.temperature > 25) { this.temperature = 25}
    }
    else if (mode === 'off') {
        this.powersavemode = false
        this.maxTemperature = 32
    }
}

Thermostat.prototype.reset = function() {
    this.temperature = 20
} 

Thermostat.prototype.usage = function() {
    if (this.temperature < 18) {
        return ('low-usage')
    } else if (this.temperature < 25) {
        return ('medium-usage')
    } else {
        return ('high-usage')
    }

}