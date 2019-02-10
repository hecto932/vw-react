import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
  state = {
    appName: 'Start Bootstrap',
    value: '',
    thereIsResult: false,
    results: []
  }
  handleFocusOut = (event) => {
    this.setState({
      results: [],
      thereIsResult: false
    })
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
      .then(data => data.json())
      .then(data2 => {
        data2.length = 10;
        if (data2.length) {
          this.setState({
            thereIsResult: true,
            results: data2
          })
        }
        data2.forEach(e => {
          console.log(e);
        })
      });
    }
  }
  render () {
    return (
      <Search 
        appName={this.state.appName}
        handleKeyPress={this.handleKeyPress}
        thereIsResult={this.state.thereIsResult}
        results={this.state.results}
      />
    )
  }
}

export default SearchContainer;
