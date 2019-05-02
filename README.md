# graphql
demo graphql

```query {
    books {
      id
      name
      author
    }
  }```

  ```createNewBook {
    createBook(input: {
      name: "The Underground Railroad",
      author: "Colson Whitehead"
    }) {
      id
      name
      author
    }
  }```