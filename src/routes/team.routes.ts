import { Router } from "express";
import {
  index,
  create,
  update,
  drop,
  assign,
} from "../controllers/team.controller";
const route = Router();

route.get("/", index);
route.post("/create", create);
route.post("/assign", assign);
route.put("/update/:id", update);
route.delete("/delete/:id", drop);

export default route;
