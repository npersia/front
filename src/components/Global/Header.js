import React, { Component } from 'react';
import './css/Header.css';

import PropTypes from 'prop-types';



class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    };
  render() {


    return (
      <div className="Header">
        <header className="Logo">
            <nav className="navbar-expand-md navbar-dark bg-dark navbar fixed-top">
                <div className="container">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbar3SupportedContent" aria-controls="navbar3SupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse text-center justify-content-center"
                         id="navbar3SupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-3">
                                <a className="nav-link text-light" href="/"><b>HOME</b></a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#menu"><b>MENU</b></a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#venue"><b>VENUE</b></a>
                            </li>
                        </ul>
                        <a className="btn navbar-btn btn-secondary mx-2" href="#book"><b>BOOK</b></a>
                    </div>
                </div>
            </nav>

        </header>
      </div>
    );
  }
}

export default Header;
