import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="nav">
          <div class="nav-header">
            <div class="nav-title">JoGeek</div>
          </div>
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div class="nav-links">
            <a href="//project" target="_blank">
              Projects
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
