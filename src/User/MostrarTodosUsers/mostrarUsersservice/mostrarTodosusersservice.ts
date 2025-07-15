import { prismaCli } from "../../../prisma/conection";

class mostrarTodosUsersService{
    async execute(){
       const listUsers = await prismaCli.user.findMany()

       return listUsers
    }
}
export {mostrarTodosUsersService}