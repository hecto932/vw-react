import React from 'react';
import './search.css'

const Search = (props) => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand text-white">
      <img className="d-inline-block align-top d-block d-sm-none" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="bootstrap-img" />
      <span className="d-none d-sm-block">Start Bootstrap</span>
    </a>
    <div className="d-inline-flex p-2">
      <form className="form-inline search-form">
        <div className="input-group">
          <input type="text" className="form-control" id="validationTooltipUsername" placeholder="Search for..." aria-describedby="validationTooltipUsernamePrepend" required />
          <div className="input-group-prepend">
            <button className="input-group-text search-button" id="validationTooltipUsernamePrepend"><i className="fas fa-search"></i></button>
          </div>
        </div>
      </form>
      <span className="nav-icons">
        <i className="fas fa-bell"></i>
        <span className="badge badge-pill badge-danger notification-number">4</span>
      </span>
      <span className="nav-icons">
        <i className="fas fa-envelope"></i>
        <span className="badge badge-pill badge-danger notification-number">4</span>
      </span>
      <span className="nav-icons">
        <i className="fas fa-user-circle"></i>
        <span className="badge badge-pill badge-danger notification-number">4</span>
      </span>
    </div>
  </nav>
);

export default Search;
