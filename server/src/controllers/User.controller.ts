import {Request, Response} from 'express'
import UserService from '../service/User.service';

const getUserAllController = async (req: Request, res: Response) => {
  console.log(req.body)
  try {
    const users = await UserService.getUserAll();
    res.status(200).json(users);
  } 
  catch (error) {
    res.status(500).send(error);
  }
}

export {
  getUserAllController,
}