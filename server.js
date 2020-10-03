const app = require("./src/app");
const port = 8080;

app.listen(port, () => {
  console.log(`app está rodando na porta ${port}`);
});
