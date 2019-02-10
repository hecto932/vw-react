import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
  state = {
    appName: 'Start Bootstrap',
    thereIsResult: false,
    results: [],
    job: null,
  }
  handleJobClick = (uuid) => {
    const inputText = document.getElementById('inputText')
    fetch(`http://api.dataatwork.org/v1/jobs/${uuid}/related_skills`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          thereIsResult: false,
          job: data,
        });
        console.log(data)
        inputText.value = data.job_title
      });
  }
  handleKeyPress = (event)  => {
    const inputText = event.target.value;
    console.log(inputText)

    if (event.target.value == '') {
      this.setState({
        thereIsResult: false,
        results: []
      })
    } else {
      fetch(`http://api.dataatwork.org/v1/jobs/autocomplete?begins_with=${inputText}`)
        .then(response => response.json())
        .then(data => {
          console.log(`Total results: ${data.length}`)
          data.length = 8;
          console.log(`Showing: ${data.length}`)
          if (data.length) {
            this.setState({
              thereIsResult: true,
              results: data
            })
          }
        });
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
