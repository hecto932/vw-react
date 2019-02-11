import React from 'react';
import './search.scss';

const Search = (props) => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand text-white">
      <img className="d-inline-block align-top d-block d-sm-none" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="bootstrap-img" />
      <span className="d-none d-sm-block">{props.appName}</span>
    </a>
 
    <div className="d-inline-flex p-2">
      <form className="search-form">
        <input id="csrfToken" type="hidden" value={props.csrfToken} />
          <div className="search-input-button">
            <input name="inputText" onChange={props.handleKeyPress} type="text" className="form-control search-text" id="inputText" placeholder="Search for..." autoComplete="off" required />
            <button onClick={props.handleOnSubmit} className="input-group-text search-button" id="inputTextPrepend"><i className="fas fa-search"></i></button>
          </div>
        { props.thereIsResult && 
          <ul className="list-group search-result">
            {
              props.results.map(item => {
                return (
                <li key={item.uuid} {...item} className="list-group-item">
                  <a href="#" onClick={() => props.handleJobClick(item.uuid)}>{item.suggestion}</a>
                </li>
                )
              })
            }
          </ul>
        }
      </form>
      <div className="notifications">
        <a className="align-vertical-icons" href="#">
          <span className="nav-icons">
            <i className="fas fa-bell"></i>
            <span className="badge badge-pill badge-danger notification-number">4</span>
          </span>
        </a>
        <a className="align-vertical-icons" href="#">
          <span className="nav-icons">
            <i className="fas fa-envelope"></i>
            <span className="badge badge-pill badge-danger notification-number">4</span>
          </span>
        </a>
        <a className="align-vertical-icons" href="#">
          <span className="nav-icons">
            <i className="fas fa-user-circle"></i>
            <span className="badge badge-pill badge-danger notification-number">4</span>
          </span>
        </a>
      </div>
      <div className="notifications-mobile">
        <a href="#">
          <i class="fas fa-ellipsis-v"></i>
        </a>
      </div>
    </div>
  </nav>
);

export default Search;
