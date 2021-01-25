import express from "express";
import team_routes from "./team.routes";
import member_route from "./member.routes";

const router = express();

// const routes = () => {
router.use("/team", team_routes);
router.use("/member", member_route);
// }

export default router;
