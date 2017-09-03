import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const data = require('./data.json');
const baseUrl = 'https://api.coinmarketcap.com/v1/'

export const store = {
  state: {
    totalMarketCapUSD: 0,
    cryptos: []
  },

  getCryptoData() {
    axios.get(baseUrl + 'ticket/?limit=100').then((response) => {
      this.state.cryptos = response.data
      this.state.cryptos.forEach(crypto =>  this.addDetails(crypto));
    })
  },

  addDetails() {
    //  json model - storing for later
    //     "bitcoin": {
    //    "description": "The first decentralized peer-to-peer payment network in which encryption techniques are used to regulate the generation of units of currency and verify the transfer of funds, all operating independently of a central bank.",
    //    "website": "https://bitcoin.org/en/",
    //    "paper": "https://bitcoin.org/bitcoin.pdf",
    //    "github": "https://github.com/bitcoin"
    // },

    crypto.id = crypto.id in cryptoData ? crypto.id : undefined
    crypto.image = `${crypto.id}_image`
    crypto.description = cryptoData[crypto.id].description
    crypto.website = cryptoData[crypto.id].website
    crypto.paper = cryptoData[crypto.id].paper
    crypto.github = cryptoData[crypto.id].paper

    crypto.positivePercentChange = !(crypto.percent_change_24h.indexOf('-') > -1)
    crypto.percentChange24hrs = cryptoData.percent_change_24h.replace(/^-/, '')
  },

  getMarketCap() {
    // response model - storing for later
    //     {
    //     "total_market_cap_usd": 162489558210.0,
    //     "total_24h_volume_usd": 5713570429.0,
    //     "bitcoin_percentage_of_market_cap": 45.91,
    //     "active_currencies": 866,
    //     "active_assets": 233,
    //     "active_markets": 5433
    // }

    axios.get(baseUrl + 'global/').then((response) => {
      const globalData = response.data
      this.state.totalMarketCapUSD = globalData.total_market_cap_usd
    })
  }
}
