import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeLayout from '../components/home-layout';
import Search from '../../widgets/containers/search';


class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Search />
      </HomeLayout>
    )
  }
}

function mapStateToProps(state, props) {
  return { ...state };
}

export default connect()(Home);