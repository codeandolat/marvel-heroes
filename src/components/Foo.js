import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Foo extends Component {
  render() {
    return(
      <div>
        <h1>Foo Page</h1>
        <Link to="/">
          <button>Go Home</button>
        </Link>
      </div>
    )
  }
}

export default Foo;
