let store = {drivers: [], passengers: [], trips: []}
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name){
  this.id = ++driverId
  this.name = name
  store.drivers.push(this)
}

trips(){
  return store.trips.filter(i => i.driverId === this.id)
}

}