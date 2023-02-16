const names = require("../country/state/city/index");
const peps = require("../utilities/utils/index");

const getPeopleInCity = (names) => {
  return peps(names);
};

module.exports = getPeopleInCity;
