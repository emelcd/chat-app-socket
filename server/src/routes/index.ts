import { Router } from "express";
import userRouter from "./User.route";


const apiRouter : Router = Router();


apiRouter.use('/user', userRouter)

export default apiRouter;