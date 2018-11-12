import React, { Component } from 'react';
import './css/Footer.css';


class Footer extends Component {

  render() {
    return (
      <div className="Footer">
          <div className="text-center">
              <div className="container">
                  <div className="row">
                      <div className="col-md-4 p-4">
                          <h2 className="mb-4">Contact</h2>
                          <p className="m-0">
                              <a href="tel:+246 - 542 550 5462" className="text-white">+246 - 542 550 5462</a>
                          </p>
                          <p>
                              <a href="mailto:info@pingendo.com" className="text-white">info@pingendo.com</a>
                          </p>
                      </div>
                      <div className="col-md-4 p-4">
                          <h2 className="mb-4">Location</h2>
                          <p>
                              <a href="https://www.google.it/maps" className="text-white">23 Fake Street <br/>Seattle, WA 00000</a>
                          </p>
                      </div>
                      <div className="col-md-4 p-4">
                          <h2 className="mb-4">Openings</h2>
                          <p>11:00 - 15:00 &amp; 19:00 - 00:00 Tue/Fri <br/>11:00 - 15:00 &amp; 19:00 - 02:00 Sat/Sun</p>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-12 mt-3">
                          <p className="text-center text-muted">© Copyright 2018 Pingendo - All rights reserved. </p>
                      </div>
                  </div>
              </div>
          </div>

      </div>
    );
  }
}

export default Footer;
