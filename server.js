const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3000;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
  donates:660,
  "/users/user":"/640/users?userType=user",
  "/users/ong":"/644/users?userType=owerOng",
  "/user/donates/:userId": "/660/donates?user.userId=:userId",
  "/ong/donates/:ongId": "/660/donates?ong.ongId=:ongId",
  "/ong/:id":"/660/users/ong/ong?id=:id"
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);

/*usuario testes
{
  "email": "admin@mail.com",
  "password": "admin123"
}
{
  "email": "ongteste@mail.com",
  "password": "ong123"
}
   */