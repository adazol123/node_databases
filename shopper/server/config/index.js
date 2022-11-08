const pkg = require('../../package.json');

module.exports = {
  applicationName: pkg.name,
  mongodb: {
    url: 'mongodb+srv://asg:boysupot123@pegaxy.yxitn.mongodb.net/asg_assessment?retryWrites=true&w=majority',

  },
  redis: {
    port: 6379,
    client: null
  },
  mysql: {
    options: {
      host: "localhost",
      port: 3306,
      dialect: 'mysql',
      database: "danyel",
      username: "root",
      password: "boysupotnga1234"
    },
    client: null
  }

};
