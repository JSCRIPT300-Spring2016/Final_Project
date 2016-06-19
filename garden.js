function Plant(name, datePlanted, dateHarvested, number, spaceNeeded) {
  this.name = name;
  this.datePlanted = datePlanted;
  this.dateHarvested = dateHarvested;
  this.number = number;
  this.spaceNeededPerPlant = spaceNeeded;
  this.totalSpaceNeeded = number * spaceNeededPerPlant;
}

function addPlant(name, datePlanted, dateHarvested, number, spaceNeededPerPlant) {
  var newPlant = new Plant(name, datePlanted, dateHarvested, number, spaceNeededPerPlant);
  plantList.append(newPlant);
}

function editPlant(edits) {
  var plantIndex = plantList.findIndex(function (plant) {
    return plant.name === name;
  });
  plantList[plantIndex].name = edits.name;
  plantList[plantIndex].datePlanted = edits.datePlanted;
  plantList[plantIndex].dateHarvested = edits.dateHarvested;
  plantList[plantIndex].number = edits.number;
  plantList[plantIndex].spaceNeededPerPlant = edits.spaceNeededPerPlant;
  plantList[plantIndex].totalSpaceNeeded = plantList[plantIndex].spaceNeededPerPlant * plantList[plantIndex].number;

  return plantList[plantIndex];
}

function deletePlant(name) {
  var plantIndex = plantList.findIndex(function (plant) {
    return plant.name === name;
  });
  plantList.splice(plantIndex, 1);
}

function findPlantsByDate(date) {
  var currentPlants = _.filter(plantList, function(plant) {
    var jsDatePlanted = new Date(plant.datePlanted);
    var jsDateHarvested = new Date(plant.dateHarvested);
    return (jsDatePlanted <= date && date <= jsDateHarvested);
  });
  return currentPlants;
}

function getPlants() {
  console.log(plantList);
  return plantList;
}

function showSoonToPlantPlants() {
  // returning one list element to test that route works
  // return plantList[1];
  var today = new Date();
  var jsDate = new Date(plant.datePlanted);
  var soonToPlant = _.filter(plantList, function(plant) {
    return ((jsDate - (14 * 24 * 60 * 60 * 1000)) <= today && (today + (14 * 24 * 60 * 60 * 1000)) <= jsDate);
  });
  return soonToPlant;
}

function showSoonToHarvestPlants() {
  // var today = new Date();
  // var soonToHarvest = _.filter(plantList, function(plant) {
  //   var jsDate = new Date(plant.dateHarvested);
  //   return ((jsDate - (14 * 24 * 60 * 60 * 1000)) <= today && today + (14 * 24 * 60 * 60 *1000) <= dateHarvested);
  // });
  // return soonToHarvest;

  // should return carrots (as test route)
  return plantList[1];
}

module.exports = {
  addPlant: addPlant,
  deletePlant: deletePlant,
  findPlantsByDate: findPlantsByDate,
  showSoonToPlantPlants: showSoonToPlantPlants,
  showSoonToHarvestPlants: showSoonToHarvestPlants
}
