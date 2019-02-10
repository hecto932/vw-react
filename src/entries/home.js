import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';

const homeContainer = document.getElementById('home-container')

render(<Home />, homeContainer)