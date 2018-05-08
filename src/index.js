/**
 * @class Clustergrammer
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import _Clustergrammer from './clustergrammer';
require('bootstrap/dist/css/bootstrap.min.css');
require('font-awesome/css/font-awesome.min.css');

const Box = styled.div`
  * {
  -webkit-box-sizing: border-box;
  }

  body:not(&) .d3-tip {
    line-height: 1.25;
    font-weight: bold;
    padding: 12px;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    border-radius: 2px;
    max-width: 500px;
  }

  body:not(&) .d3-tip.n:after {
    margin: -1px 0 0 0;
    top: 100%;
    left: 0;
  }

  body{
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.428;
    color: #333;
    background-color: #fff;
  }

  .viz_medium_text{
    width: 99%;
    margin-left: 5px;
    margin-top: 3px;
    margin-bottom: 3px;
    color:#333;
    text-align: justify;
    font-size: 14px;
    font-weight: 300;
    padding-left: 0px;
  }

  .viz_large_text{
    width: 99%;
    margin: 0 auto;
    margin-top: 6px;
    margin-bottom: 3px;
    color:#333;
    text-align: justify;
    font-size: 16px;
    font-weight: 300;
    padding-left: 0px;
  }

  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }


  .icon_buttons{
    color: #337ab7;
  }

  .sidebar_text{
    font-weight: 300;
    font-size: 14px;
    line-height: 1.1;
  }

  .sidebar_button_text{
    font-size: 13px;
    font-weight: 300;
  }

  .btn{
    padding-top:2px;
    padding-bottom:2px;
  }

  .btn-group-vertical > .btn:not(:first-child):not(:last-child) {
    border-radius: 0;
  }

  .btn-group-vertical > .btn + .btn,
  .btn-group-vertical > .btn + .btn-group,
  .btn-group-vertical > .btn-group + .btn,
  .btn-group-vertical > .btn-group + .btn-group {
    margin-top: -1px;
    margin-left: 0;
  }

  .btn-group-vertical > .btn.active {
    z-index: 2;
  }

  .btn-group-vertical > .btn,
  .btn-group-vertical > .btn-group,
  .btn-group-vertical > .btn-group > .btn {
    display: block;
    float: none;
    width: 100%;
    max-width: 100%;
  }

  .btn-group-vertical > .btn {
    position: relative;
    float: left;
  }

  .btn-primary.active,
  .open > .dropdown-toggle.btn-primary {
    background-image: none;
  }

  .btn-primary.active,
  .open > .dropdown-toggle.btn-primary {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
  }

  .btn.active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
  }

  .btn {
    font-family: inherit;
    display: inline-block;
    /*padding: 6px 12px;*/
    margin-bottom: 0;
    /*font-size: 14px;*/
    /*font-weight: normal;*/
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }

  .btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
  }

  .toggle_row_order{
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }

  .modal-backdrop{
    display: none;
  }

  .modal-backdrop.fade{
    display: none;
  }

  .modal-backdrop.in{
    display: none;
  }

  /* sidebar tooltips */
  .sidebar_tooltip {
    position: relative;
    display: inline-block;
  }

  .sidebar_tooltip .sidebar_tooltip_text {
    visibility: hidden;
    width: 120px;
    background: rgba(0, 0, 0, 1);
    /*opacity: 0.95;*/
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    position: absolute;
    z-index: 1000;
    top:100%;
    /*left:-400%;*/
    font-size: 15px;
    /*margin-left: 60px;*/
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: bold;
  }

  .sidebar_tooltip:hover .sidebar_tooltip_text {
    visibility: visible;
  }

  div.awesomplete > ul {
    z-index: 99;
  }


  .form-control {
    font-family: inherit;
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font: inherit;
    color: inherit;
  }
`;

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
      root: '#react-clustergrammer-box',
    });
  }

  render() {
    const { width, height } = this.props;

    return (
      <Box
        id='react-clustergrammer-box'
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    )
  }
}
