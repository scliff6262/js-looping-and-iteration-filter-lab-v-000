function findMatching(drivers, string){
  return drivers.filter(function(driver, string){return driver === string;})
}
