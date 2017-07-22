import React from 'react';
import './app.scss';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        {this.props.children}
      </div>
    );
  }
}

export default AppComponent;
