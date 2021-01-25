import { Request, Response } from "express";
import { CONF } from "../conf/constant";
import Teams from "../models/Team";
import TeamMembers from "../models/TeamMembers";
import Member from "./../models/Member";
const jwt = require("jsonwebtoken");

export class MemberController {
  constructor() {}
/**
 * @api {get} /user/ Get Users List
 * @apiName GetUsers
 * @apiGroup User
 *
 * @apiParam none
 *
 * @apiSuccess {String} Users List Json Responce
 */
  public async index(req: Request, res: Response) {
    const member = await Member.findAll({ order: [["id", "ASC"]] });
    if (member.length) {
      res.json({ data: member });
    }
  }
  /**
   * @api {post} http://localhost:8000/api/member/create Create Member
   * @apiName Create Member
   * @apiGroup Member
   *
   * @apiParam {String} first_name
   * @apiParam {String} last_name
   * @apiParam {String} email
   * @apiParam {String} password
   * @apiParam {String} designation
   * @apiParam {String} phone_num
   * @apiParam {String} image
   * @apiParam {String} resume
   *
   * @apiSuccess {String} User Created
   */
  public async create(req: Request, res: Response) {
    const member = await Member.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      designation: req.body.designation,
      phone_num: req.body.phone_num,
      image: req.body.image,
      resume: req.body.resm,
    });
    res.json({ data: member });
  }
  /**
   * getAll
   */
  public async update(req: Request, res: Response) {
    let member = await Member.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (member[0] === 1) {
      let updatedmember = await Member.findByPk(req.params.id);
      res.json({
        message: "member details updated successfully",
        data: updatedmember,
      });
    } else {
      res.json({
        message: "member details not found",
      });
    }
  }
  /**
   * getAll
   */
  public async drop(req: Request, res: Response) {
    let member = await Member.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (member === 1) {
      await TeamMembers.destroy({ where: { userId: req.params.id } });
      res.json({
        message: "member deleted successfully",
      });
    } else {
      res.json({
        message: "member details not found",
      });
    }
  }

  public async memberswteam(req: Request, res: Response) {
    const member = await Member.findAll({
      include: { model: Teams, through: { attributes: [] } },
      order: [["id", "ASC"]],
    });
    if (member.length) {
      res.json({ data: member });
    }
  }

  /**
   * @api {post} /user/login/ Login User
   * @apiName UserLogin
   * @apiGroup User
   *
   *
   * @apiSuccess {String}  Login Success with Valid Token
   */
  public async login(req: Request, res: Response) {
    const member = await Member.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    if (member) {
      // let token = await jwt.sign({exp: Math.floor(Date.now() / 1000 + (60 * 10)),data:member},CONF.SECRETKEY);
      let token = await jwt.sign({ data: member }, CONF.SECRETKEY, {
        expiresIn: "5m",
      });
      return res.json({ token: token });
    }
    return res.json({ message: "invalid user" });
  }
}
