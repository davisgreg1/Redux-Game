import React from 'react';
import Canvas from './components/Canvas';
import propTypes from 'prop-types';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Canvas />
      </div>
    );
  }
}

App.propTypes = {
  message: propTypes.string.isRequired
}

export default App;
