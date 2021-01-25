import sequelize from "./../conf/database";
import Sequelize from "sequelize";
import Members from "./Member";
import Teams from "./Team";

const TeamMembers = sequelize.define(
  "team_members",
  {
    teamId: {
      field: "teamId",
      type: Sequelize.INTEGER,
    },
    userId: {
      field: "userId",
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

TeamMembers.belongsTo(Members);
TeamMembers.belongsTo(Teams);

export default TeamMembers;
