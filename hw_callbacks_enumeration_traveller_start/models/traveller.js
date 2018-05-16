const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const foundStartLocations = this.journeys.map((journey) => {
    return journey.startLocation});
  return foundStartLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {

};

Traveller.prototype.getModesOfTransport = function () {

};

Traveller.prototype.getJourneysByTransport = function (transport) {

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
