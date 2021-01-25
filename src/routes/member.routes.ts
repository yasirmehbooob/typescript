import { Router } from "express";
import { format } from "sequelize/types/lib/utils";
import { MemberController } from "./../controllers/member.controller";

const route = Router();
const member = new MemberController();
route.get("/", member.index);
route.get("/list/team", member.memberswteam);
route.post("/create", member.create);
route.put("/update/:id", member.update);
route.delete("/delete/:id", member.drop);

export default route;
