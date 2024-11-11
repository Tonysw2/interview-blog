import fastify from "fastify";

const app = fastify();

app.listen(
  {
    port: 3333,
  },
  (err, adress) => {
    if (err) {
      console.log(err);
    }

    console.log(`Server running on port ${3333}`);
  }
);
