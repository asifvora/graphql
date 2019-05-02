const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./src/graphql/schema.js');

const PORT = process.env.PORT || 8080;
const app = express();

app.use('/', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`GraphQL API Server up and running at localhost: ${PORT}`);
});
