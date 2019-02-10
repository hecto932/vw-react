import request from 'request-promise';

class ApiCient {
  constructor (options) {
    super();

    this.options = options || {
      enpoint: 'https://api.dataatwork.org'
    }
  }
  getAll() {
    return request('')
  }
}