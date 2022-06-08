import { Router } from "express";
import { getUserAllController } from "../controllers/User.controller";


const userRouter: Router = Router();



userRouter.get("/", getUserAllController);



export default userRouter;