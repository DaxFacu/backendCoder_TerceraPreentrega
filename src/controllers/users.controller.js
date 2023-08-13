import { userService } from "../services/users.service.js";

class UsersController {
  getAllUsers = async (req, res) => {
    const jugadoresEncontrados = jugadoresService.getAllUsers();

    try {
      const users = await userService.getAllUsers();
      return res.status(200).json({
        status: "success",
        msg: "listado de usuarios",
        data: users,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        status: "error",
        msg: "something went wrong :(",
        data: {},
      });
    }

    return res.status(200).json({
      status: "success",
      msg: "listado de usuarios",
      data: users,
    });
  };
}

export const usersController = new UsersController();
