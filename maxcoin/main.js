const CoinAPI = require("./services/CoinAPI");
const RedisBackend = require('./services/backend/RedisBackend')
const MySQLBackend = require('./services/backend/MySQLBackend')

// eslint-disable-next-line no-unused-vars
async function run() {
  const coinAPI = new CoinAPI();
  return coinAPI.fetch();
}

// eslint-disable-next-line no-unused-vars
async function runRedis() {
  const redisBackend = new RedisBackend();
  return redisBackend.max();
}

async function runMySQL() {
  const mysqlBackend = new MySQLBackend();
  return mysqlBackend.max();
}

runMySQL()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.error(err));
