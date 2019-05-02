const uuidv4 = require('uuid/v4');
const { GraphQLNonNull, GraphQLObjectType } = require('graphql');

const {
    BookType,
    BookCreateType
} = require('./types.js');

const Books = require('../../data/books.js');

const BookMutationType = new GraphQLObjectType({
    name: 'BookMutationType',
    description: 'Mutations for BookType',
    fields: {
        createBook: {
            type: BookType,
            args: {
                input: { type: new GraphQLNonNull(BookCreateType) }
            },
            resolve: (source, { input }) => {
                let book = [];
                book.id = uuidv4();
                book.name = input.name;
                book.author = input.author;
                Books.push(book);
                return book;
            }
        }
    }
});

module.exports = BookMutationType;
