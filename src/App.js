import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from "react-flexbox-grid";

class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Link to="/about">
            <button>Go to About page</button>
          </Link>
        </Grid>
      </div>
    );
  }
}

export default App;
