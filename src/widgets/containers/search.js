import React, { Component } from 'react';
import Search from '../components/search';
import ApiClient from '../../services/client';

class SearchContainer extends Component {
  state = {
    appName: 'Start Bootstrap',
    thereIsResult: false,
    results: [],
    job: null,
  }
  handleOnSubmit = () => {

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
      Client.jobAutoComplete(inputText)
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
  render () {
    return (
      <Search 
        appName={this.state.appName}
        inputValue={this.state.value}
        handleKeyPress={this.handleKeyPress}
        thereIsResult={this.state.thereIsResult}
        results={this.state.results}
        handleJobClick={this.handleJobClick}
      />
    )
  }
}

export default SearchContainer;
