const { where, Op } = require("sequelize");
const AppError = require("../utils/error/app-error");
const { StatusCodes } = require("http-status-codes");

class crudRepository {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    const res = await this.model.create(data);
    return res;
  }
  async destroy(data) {
    const res = await this.model.destroy({
      where: { id: data },
    });
    if (!res) {
      throw new AppError(
        "not able to find the resource",
        StatusCodes.NOT_FOUND,
      );
    }
    return res;
  }
  async get(data) {
    const res = await this.model.findByPk(data);
    if (!res) {
      throw new AppError(
        "not able to find the resource",
        StatusCodes.NOT_FOUND,
      );
    }
    return res;
  }
  async getAll(filter) {
    //filter->optional
    if (filter.name) {
      const res = await this.model.findAll({
        where: {
          name: {
            [Op.startsWith]: filter.name,
          },
        },
      });
      return res;
    }
    const res = await this.model.findAll();
    return res;
  }
  async update(id, data) {
    //{data=>{col:value ...}}

    const res = await this.model.update(data, { where: { id: id } });
    if (!res) {
      throw new AppError(
        "not able to find the resource",
        StatusCodes.NOT_FOUND,
      );
    }
    return res;
  }
}

module.exports = crudRepository;
