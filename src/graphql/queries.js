const { GraphQLList, GraphQLObjectType } = require('graphql');

const { BookType } = require('./types.js');
const Books = require('../../data/books.js');

const BookQueryType = new GraphQLObjectType({
    name: 'BookQueryType',
    description: 'Query Schema for BookType',
    fields: {
        books: {
            type: new GraphQLList(BookType),
            resolve: () => Books
        }
    }
});

module.exports = BookQueryType;