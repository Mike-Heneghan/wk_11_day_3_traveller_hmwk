const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const foundStartLocations = this.journeys.map((journey) => {
    return journey.startLocation});
  return foundStartLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const foundEndLocations = this.journeys.map((journey) => {
    return journey.endLocation});
  return foundEndLocations;
};

Traveller.prototype.getModesOfTransport = function () {
  const foundModesOfTransport = this.journeys.map((journey) =>{
    return journey.transport});
  return foundModesOfTransport;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const foundJourneysOfTransportType = this.journeys.filter(journey =>
  journey.transport === transport);
  return foundJourneysOfTransportType;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
