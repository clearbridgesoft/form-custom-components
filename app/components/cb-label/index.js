
import React from 'react';

export default class Label extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { title } = this.props.schema ? this.props.schema : { title: "" };

    return (
      <h2 className="label-array">
        { title }
      </h2>
    );
  }
} 