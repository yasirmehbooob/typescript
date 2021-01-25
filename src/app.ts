import express from "express";
import { format } from "sequelize/types/lib/utils";
import { CONF } from "./conf/constant";
import routes from "./routes/index";
import { auth } from "./middleware/auth";
import { MemberController } from "./controllers/member.controller";
require("dotenv");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/api/login", new MemberController().login);
app.use("/api", auth, routes);

app.listen(CONF.PORT, () => {
  console.log(`server is running on ${CONF.PORT}`);
});
