/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
// const mongoose = require('mongoose')
const CoinAPI = require('../CoinAPI');

class MongoBackend {
  constructor() {

    this.coinAPI = new CoinAPI();
    this.mongoURI = 'mongodb+srv://asg:boysupot123@pegaxy.yxitn.mongodb.net/?retryWrites=true&w=majority';
    this.client = null;
    this.collection = null;
  }

  async connect() {
    // const db = await mongoose.connect(this.mongoURI);

  }

  async disconnect() { }

  async insert() { }

  async getMax() { }

  async max() { }
}

module.exports = MongoBackend;