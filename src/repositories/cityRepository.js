const crudRepository = require("./crud-repositoy");
const{City}=require("../models")
class CityRepository extends crudRepository{
  constructor(){
    super(City)
  }
}
module.exports=CityRepository