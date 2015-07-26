import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h1>ReactJS Camp</h1>
        <h2>React Rocks</h2>
        {this.props.params.id}
      </div>
    )
  }
};
