const debug = require('debug');

class Client {
  constructor () {
    this.endpoint = 'https://api.dataatwork.org/v1';
  }

  jobAutoComplete (str) {
    console.log('function: jobAutoComplete');

    return fetch(`${this.endpoint}/jobs/autocomplete?begins_with=${str}`)
      .then(response => {
        // console.log(response);
        if (response.status >= 200 && response.status < 300) {
          return response.json()
        } else {
          return response.json()
            .then(err => Promise.reject(err.error))
        }
      })
      .then(data => {
        return Promise.resolve(data);
      })
      .catch(err => Promise.reject(err));
  }

  jobSkills(uuid) {
    console.log('function: jobSkills')

    return fetch(`${this.endpoint}/jobs/${uuid}/related_skills`)
      .then(response => {
        console.log(response);
        if (response.status >= 200 && response.status < 300) {
          return response.json()
        } else {
          return response.json()
            .then(err => Promise.reject(err.error))
        }
      })
      .then(data => {
        return Promise.resolve(data);
      })
      .catch(err => Promise.reject(err));
  }
}

export default Client