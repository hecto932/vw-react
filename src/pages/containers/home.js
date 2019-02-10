import React, { Component } from 'react';
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

export default Home;