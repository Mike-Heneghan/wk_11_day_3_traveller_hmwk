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
  const foundJourneyOverDistance = this.journeys.filter(journey =>
  journey.distance > minDistance);
  return foundJourneyOverDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const travelledDistances = this.journeys.map((journey) => {
    return journey.distance;
  });
  const totalDistance = travelledDistances.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  })
  return totalDistance;
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const modesOfTransport = this.getModesOfTransport();
//   let uniqueModesOfTransport = [];
//   modesOfTransport.forEach((mode) => {
//     if(!uniqueModesOfTransport.includes(mode)){
//       uniqueModesOfTransport.push(mode)}
//   });
//   return uniqueModesOfTransport;
// };

Traveller.prototype.getUniqueModesOfTransport = function (){
  journeysObj = {};
  this.journeys.forEach((journey) => {
    journeysObj[journey.transport] = 'logged';
  });
  return uniqueModes = Object.keys(journeysObj);
};

module.exports = Traveller;
