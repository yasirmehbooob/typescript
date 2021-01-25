import Sequelize from "sequelize";
import sequelize from "./../conf/database";
import Members from "./Member";

const Teams = sequelize.define(
  "teams",
  {
    name: {
      field: "name",
      type: Sequelize.STRING,
    },
    discription: {
      field: "discription",
      type: Sequelize.STRING,
    },
    tags: {
      field: "tags",
      type: Sequelize.STRING,
    },
    is_deleted: {
      field: "is_deleted",
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

export default Teams;
