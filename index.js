function findMatching(drivers, string){
  return drivers.filter(function(driver){return driver.toLowerCase() === string.toLowerCase();})
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function(driver){return driver.toLowerCase().includes(string, 0)})
}
