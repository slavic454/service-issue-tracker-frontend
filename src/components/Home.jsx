import {
  Link,
} from 'react-router-dom';

import React from 'react';

const Home = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/issues">Issues</Link>
      </li>
    </ul>
  </nav>
);

export default Home;
