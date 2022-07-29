/**
 * @class Clustergrammer
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import _Clustergrammer from "./clustergrammer";

export default class Clustergrammer extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
  };

  static defaultProps = {
    width: 800,
    height: 500,
  };

  draw = () => {
    const { width, height, ...clustergrammerProps } = this.props;
    _Clustergrammer({
      ...clustergrammerProps,
      root: "#react-clustergrammer-box",
    });
  };

  componentDidMount() {
    this.draw();
  }

  render() {
    const { width, height } = this.props;

    return (
      <div
        id="react-clustergrammer-box"
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    );
  }
}
