import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://aiderpro.com/wp-content/uploads/2019/12/support_api-developers-header.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Developer</h1>

            <hr/>

          <p>HTML/CSS || Bootstrap || JavaScript || React JS || Java || C++ || Android || Python</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/anuj-singh-061888148/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/anuj1317" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
