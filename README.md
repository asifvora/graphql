# graphql
demo graphql

## Getting started
Clone the repo with
```git clone https://github.com/asifvora/graphql.git```

Install dependencies with
```npm i```

Run
```node server.js```

Server run on
```http://localhost:8080/```

```query {
    books {
      id
      name
      author
    }
  }

  createNewBook {
    createBook(input: {
      name: "The Underground Railroad",
      author: "Colson Whitehead"
    }) {
      id
      name
      author
    }
  }