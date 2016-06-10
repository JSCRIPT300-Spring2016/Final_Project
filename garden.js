// seeded (harhar) with one plant
var plantList = [
  { name: 'lettuce',
    number: 4,
    spaceNeeded: .5
  }
];

function Plant(name, datePlanted, dateHarvested, number, spaceNeeded) {
  this.name = name;
  this.datePlanted = datePlanted;
  this.dateHarvested = dateHarvested;
  this.number = number;
  this.spaceNeededPerPlant = spaceNeeded;
  this.totalSpaceNeeded = number * spaceNeededPerPlant;
}

function addPlant(name, datePlanted, dateHarvested, number, spaceNeeded) {
  var newPlant = new Plant(name, datePlanted, dateHarvested, number, spaceNeeded);
  plantList.append(newPlant);
}

// may add a convertDate function here?

function editPlant(edits) {
  var plantIndex = plantList.findIndex(function (plant) {
    return plant.name === name;
  });
  plantList[plantIndex].name = edits.name;
  plantList[plantIndex].datePlanted = edits.datePlanted;
  plantList[plantIndex].dateHarvested = edits.dateHarvested;
  plantList[plantIndex].number = edits.number;
  plantList[plantIndex].spaceNeededPerPlant = edits.spaceNeeded;
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
    return (plant.datePlanted <= date && date <= plant.dateHarvested);
  });
  return currentPlants;
}

function getPlants() {
  return plantList;
}

module.exports = {
  addPlant: addPlant,
  deletePlant: deletePlant,
  findPlantsByDate: findPlantsByDate
}
