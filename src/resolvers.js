const users = [
  { id: 1, name: "Marcos Rodrigues", email: "marcosmpar@gmail.com " },
  { id: 2, name: "Marcos Paulo", email: "marcos.away@hotmail.com " }
];

module.exports = {
  Query: {
    users: () => users,
    user: () => users[0]
  },
  Mutation: {
    createUser: () => users[0]
  }
};
