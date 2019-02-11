import React, { Component } from 'react';
import Search from '../components/search';
import ApiClient from '../../services/client';
import xss from 'xss';
import csrf from 'csrf';

const Tokens = new csrf();

class SearchContainer extends Component {
  state = {
    appName: 'Start Bootstrap',
    thereIsResult: false,
    results: [],
    job: null,
    secret: Tokens.secretSync(),
  }
  handleOnSubmit = (event) => {
    event.preventDefault();

    const secret = this.state.secret;
    const token = document.getElementById('csrfToken').value

    if (!Tokens.verify(secret, token)) {
      const Client = new ApiClient();
      const inputText = document.getElementById('inputText').value
      console.log(inputText)

      if (event.target.value == '') {
        this.setState({
          thereIsResult: false,
          results: []
        })
      } else {
        const xssInput = xss(inputText);
        Client.jobAutoComplete(xssInput)
          .then(data => {
            // console.log(data);
            if (!data.error && data.length) {
              data.length = 8;
              this.setState({
                thereIsResult: true,
                results: data
              })
            }
          })
          .catch(err => console.log(err))
      }
    }

    
  }
  handleJobClick = (uuid) => {
    const inputText = document.getElementById('inputText')
    const Client = new ApiClient();
    
    Client.jobSkills(uuid)
      .then(data => {
        this.setState({
          thereIsResult: false,
          job: data,
        });
        console.log(data)
        inputText.value = data.job_title
      })
      .catch(err => console.log(err))
  }
  handleKeyPress = (event)  => {
    const Client = new ApiClient();
    const inputText = event.target.value;
    console.log(inputText)

    if (event.target.value == '') {
      this.setState({
        thereIsResult: false,
        results: []
      })
    } else {
      // Do the request when there are more than 2 characters
      if (inputText.length > 2) {
        const xssInput = xss(inputText);
        Client.jobAutoComplete(xssInput)
          .then(data => {
            // console.log(data);
            if (!data.error && data.length) {
              data.length = 8;
              this.setState({
                thereIsResult: true,
                results: data
              })
            }
          })
          .catch(err => {
            console.log(err)
            this.setState({
              thereIsResult: false,
              results: []
            })
          })
      }
    }
  }
  render () {
    return (
      <Search 
        appName={this.state.appName}
        inputValue={this.state.value}
        handleKeyPress={this.handleKeyPress}
        thereIsResult={this.state.thereIsResult}
        results={this.state.results}
        handleJobClick={this.handleJobClick}
        handleOnSubmit={this.handleOnSubmit}
        csrfToken={''}
      />
    )
  }

  componentDidMount() {
    document.getElementById('csrfToken').value = Tokens.create(this.state.secret);
  }
}

export default SearchContainer;
