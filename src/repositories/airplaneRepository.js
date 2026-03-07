const crudRepository = require("./crud-repositoy");
const {Airplanes}=require("../models/index")
class AirPlaneRepository extends crudRepository{
  constructor(){
    super(Airplanes)
  }
}
module.exports=AirPlaneRepository
