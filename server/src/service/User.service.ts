import { IUser, UserModel } from "../models/User.model";



class UserService {
  async getUserAll(): Promise<IUser[]> {
    return await UserModel.find();
  }
}

const userService = new UserService();

export default userService;