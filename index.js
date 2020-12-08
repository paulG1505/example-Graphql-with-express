"use strict";

const { makeExecutableSchema } = require("graphql-tools");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const port = process.env.port || 3500;
const { readFileSync } = require("fs");
const { join } = require("path");
const resolvers = require("./lib/resolvers");
// definiendo el esquema inicial
const typeDefs = readFileSync(
  join(__dirname, "lib", "schema.graphql"),
  "utf-8"
);
const schema = makeExecutableSchema(
    {typeDefs, resolvers}
);

// llamando al middleware primer
app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`server is listen at  http://localhost:${port}/api`);
});

// //ejecutando el query
// graphql(schema,'{hello}',resolvers).then((data)=>{
//     console.log(data);
// })
