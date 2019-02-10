const debug = require('debug');

class Client {
  constructor (options) {
    this.options = options || {
      enpoint: 'http://api.dataatwork.org'
    }
  }

  contains (str) {
    return fetch('`${this.options.endpoint}/v1/jobs/autocomplete?contains=${str}`');
    // const options = {
    //   uri: `${this.options.endpoint}/v1/jobs/autocomplete?contains=${str}`,
    //   method: 'GET',
    //   json: true,
    // }

    // return Promise.resolve(request(options))
  }
}

export default Client