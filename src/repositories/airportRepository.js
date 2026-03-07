const crudRepository = require("./crud-repositoy");
const {Airport}=require("../models/index")
class AirPortRepository extends crudRepository{
  constructor(){
    super(Airport)
  }
}
module.exports=AirPortRepository
