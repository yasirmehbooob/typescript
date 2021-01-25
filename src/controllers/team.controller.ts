import { Request, Response } from "express";
import { Op } from "sequelize";
import Teams from "./../models/Team";
import TeamMembers from "./../models/TeamMembers";

export const index = async (req: Request, res: Response) => {
  const teams = await Teams.findAll({
    where: {
      is_deleted: {
        [Op.not]: 1,
      },
    },
    order: [["id", "ASC"]],
  });
  res.json({ data: teams });
};

/**
 * @api {post} /creat Create Team
 * @apiName CreateTeam
 * @apiGroup Team
 *
 * @apiParam none
 *
 * @apiSuccess {String} Team Created
 */
export const create = async (req: Request, res: Response) => {
  const team = await Teams.create({
    name: req.body.name,
    discription: req.body.discription,
    tags: req.body.tags,
  });
  res.json({ data: team });
};

export const update = async (req: Request, res: Response) => {
  let team = await Teams.update(
    {
      name: req.body.name,
      discription: req.body.discription,
      tags: req.body.tags,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  if (team[0] === 1) {
    let updatedteam = await Teams.findByPk(req.params.id);
    res.json({
      message: "team details updated successfully",
      data: updatedteam,
    });
  } else {
    res.json({
      message: "team details not found",
    });
  }
};

/**
 * @api {post} /delete/:id/ Soft Delete a Team
 * @apiName DeleteTeam
 * @apiGroup Team
 *
 * @apiParam :id => team id
 *
 * @apiSuccess {String}  Team Deleted and Also Un-Assigned All Members Of That Team
 */
export const drop = async (req: Request, res: Response) => {
  let team = await Teams.update(
    {
      is_deleted: 1,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  if (team[0] === 1) {
    await TeamMembers.destroy({ where: { teamId: req.params.id } });
    res.json({
      message: "team deleted successfully",
    });
  } else {
    res.json({
      message: "team details not found",
    });
  }
};

/**
 * @api {post} /assign We Simply Assign Some Members in a Team
 *
 * @apiName AssignTeamMembers
 * @apiGroup Team
 *
 * @apiParam none
 *
 * @apiSuccess {String} Members Assigned
 */
export const assign = async (req: Request, res: Response) => {
  let member = req.body.member_id.split(",");
  let team_member: any = [];
  await member.forEach(async (element: any) => {
    team_member.push(
      await TeamMembers.create({
        teamId: req.body.team_id,
        userId: element,
      })
    );
  });

  res.json({ message: "members are assigned successfully" });
};
