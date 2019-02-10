import React from 'react';
import './search.css'

const Search = (props) => (
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand text-white">
      <img class="d-inline-block align-top d-block d-sm-none" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="bootstrap-img" />
      <span class="d-none d-sm-block">Start Bootstrap</span>
    </a>
    <div class="d-inline-flex p-2">
      <form class="form-inline search-form">
        <div class="input-group">
          <input type="text" class="form-control" id="validationTooltipUsername" placeholder="Search for..." aria-describedby="validationTooltipUsernamePrepend" required />
          <div class="input-group-prepend">
            <button class="input-group-text search-button" id="validationTooltipUsernamePrepend"><i class="fas fa-search"></i></button>
          </div>
        </div>
      </form>
      <span class="nav-icons">
        <i class="fas fa-bell"></i>
        <span class="badge badge-pill badge-danger notification-number">4</span>
      </span>
      <span class="nav-icons">
        <i class="fas fa-envelope"></i>
        <span class="badge badge-pill badge-danger notification-number">4</span>
      </span>
      <span class="nav-icons">
        <i class="fas fa-user-circle"></i>
        <span class="badge badge-pill badge-danger notification-number">4</span>
      </span>
    </div>
  </nav>
);

export default Search;
