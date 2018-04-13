import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Marvel API</h1>
        <Link to="/foo">
          <button>Go to Foo page</button>
        </Link>
      </div>
    );
  }
}

export default App;
