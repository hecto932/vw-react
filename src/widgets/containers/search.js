import React, { Component } from 'react';
import { connect } from 'react-redux';
import xss from 'xss';
import csrf from 'csrf';
import Search from '../components/search';
import ApiClient from '../../services/client';

const Tokens = new csrf();

class SearchContainer extends Component {
  handleOnSubmit = (event) => {
    event.preventDefault();

    const secret = this.props.secret;
    const token = document.getElementById('csrfToken').value

    if (!Tokens.verify(secret, token)) {
      console.log('Valid!')
      const Client = new ApiClient();
      const inputText = document.getElementById('inputText').value

      if (event.target.value == '') {
        this.props.dispatch({
          type: 'AUTOCOMPLETE_LIST',
          payload: {
            thereIsResult: false,
            results: []
          }
        })
      } else {
        const xssInput = xss(inputText);
        Client.jobAutoComplete(xssInput)
          .then(data => {
            // console.log(data);
            if (!data.error && data.length) {
              data.length = 8;
              this.props.dispatch({
                type: 'AUTOCOMPLETE_LIST',
                payload: {
                  thereIsResult: true,
                  results: data,
                }
              })
            }
          })
          .catch(err => console.log(err))
      }
    } else {
      console.log('Invalid request...')
    }
  }
  handleJobClick = (uuid) => {
    const inputText = document.getElementById('inputText')
    const Client = new ApiClient();
    
    Client.jobSkills(uuid)
      .then(data => {
        console.log(data);
        inputText.value = data.job_title
        this.props.dispatch({
          type: 'SAVE_JOB',
          payload: {
            thereIsResult: false,
            job:data,
          }
        })
      })
      .catch(err => console.log(err))
  }
  handleKeyPress = (event)  => {
    const Client = new ApiClient();
    const inputText = event.target.value;

    if (event.target.value == '') {
      this.props.dispatch({
        type: 'AUTOCOMPLETE_LIST',
        payload: {
          thereIsResult: false,
          results: []
        }
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
              this.props.dispatch({
                type: 'AUTOCOMPLETE_LIST',
                payload: {
                  thereIsResult: true,
                  results:data,
                }
              })
            }
          })
          .catch(err => {
            console.log(err)
            this.props.dispatch({
              type: 'AUTOCOMPLETE_LIST',
              payload: {
                thereIsResult: false,
                results: []
              }
            })
          })
      }
    }
  }
  render () {
    return (
      <Search 
        appName={this.props.appName}
        handleKeyPress={this.handleKeyPress}
        thereIsResult={this.props.thereIsResult}
        results={this.props.results}
        handleJobClick={this.handleJobClick}
        handleOnSubmit={this.handleOnSubmit}
        csrfToken={''}
      />
    )
  }

  componentDidMount() {
    document.getElementById('csrfToken').value = Tokens.create(this.props.secret);
  }
}

function mapStateToProps(state, props) {
  return { ...state };
}

export default connect(mapStateToProps)(SearchContainer);
