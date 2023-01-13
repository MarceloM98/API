const  { Router } = require("express")

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router()

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);






// usersRoutes.use(myMiddleware) aplica para todas as rotas.
// function myMiddleware(request, response, next){
//   console.log("Você passou pelo Middleware");
//   if(!request.body.isAdmin){
//     return response.json({ message: "user unauthorized"})
//   }

//   next();
// }

module.exports = usersRoutes;