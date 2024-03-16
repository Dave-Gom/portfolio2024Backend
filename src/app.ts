import express from "express";

const main = () => {
  const app = express();

  app.listen(3000, () => {
    console.log("listo por el puerto 3000", 3000);
  });
};

main();
