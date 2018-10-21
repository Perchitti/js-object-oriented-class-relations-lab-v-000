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

passengers(){
  return store.trips.map(i => i.passenger === tripId)
}

}

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }

  trips(){
    store.trips.filter(i => i.passengerId === this.id)
  }


}

class Trip {
  constructor(){
    this.id = ++tripId
    this.driverId = driverId
    this.passengerId = passengerId
    store.trips.push(this)
  }



}
