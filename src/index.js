/**
 * @class Clustergrammer
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import _Clustergrammer from './clustergrammer';
require('font-awesome/css/font-awesome.min.css');

const Box = styled.div`
  &{
    /*! CSS Used from: Embedded */
    .d3-slider{position:relative;font-family:Verdana,Arial,sans-serif;font-size:1.1em;border:1px solid #aaaaaa;z-index:2;}
    .d3-slider-horizontal{height:.8em;}
    .d3-slider-handle{position:absolute;width:1.2em;height:1.2em;border:1px solid #d3d3d3;border-radius:4px;background:#eee;background:linear-gradient(to bottom, #eee 0%, #ddd 100%);z-index:3;}
    .d3-slider-handle:hover{border:1px solid #999999;}
    .d3-slider-horizontal .d3-slider-handle{top:-.3em;margin-left:-.6em;}
    /*! CSS Used from: Embedded */
    [hidden]{display:none;}
    .visually-hidden{position:absolute;clip:rect(0, 0, 0, 0);}
    div.awesomplete{display:inline-block;position:relative;}
    div.awesomplete > input{display:block;}
    div.awesomplete > ul{position:absolute;left:0;z-index:1;min-width:100%;box-sizing:border-box;list-style:none;padding:0;border-radius:.3em;margin:.2em 0 0;background:hsla(0,0%,100%,.9);background:linear-gradient(to bottom right, white, hsla(0,0%,100%,.8));border:1px solid rgba(0,0,0,.3);box-shadow:.05em .2em .6em rgba(0,0,0,.2);text-shadow:none;}
    div.awesomplete > ul[hidden],div.awesomplete > ul:empty{display:none;}
    div.awesomplete > ul:before{content:"";position:absolute;top:-.43em;left:1em;width:0;height:0;padding:.4em;background:white;border:inherit;border-right:0;border-bottom:0;-webkit-transform:rotate(45deg);transform:rotate(45deg);}
    /*! CSS Used from: Embedded */
    body{margin:0;}
    [hidden]{display:none;}
    a{background-color:transparent;}
    a:active,a:hover{outline:0;}
    svg:not(:root){overflow:hidden;}
    button,input{margin:0;font:inherit;color:inherit;}
    button{overflow:visible;}
    button{text-transform:none;}
    button{-webkit-appearance:button;cursor:pointer;}
    button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0;}
    input{line-height:normal;}
    @media print{
    *,:after,:before{color:#000!important;text-shadow:none!important;background:0 0!important;-webkit-box-shadow:none!important;box-shadow:none!important;}
    a,a:visited{text-decoration:underline;}
    a[href]:after{content:" (" attr(href) ")";}
    p{orphans:3;widows:3;}
    }
    *{-webkit-box-sizing:border-box;box-sizing:border-box;}
    :after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;}
    body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff;}
    button,input{font-family:inherit;font-size:inherit;line-height:inherit;}
    a{color:#337ab7;text-decoration:none;}
    a:focus,a:hover{color:#23527c;text-decoration:underline;}
    a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px;}
    h4{font-family:inherit;font-weight:500;line-height:1.1;color:inherit;}
    h4{margin-top:10px;margin-bottom:10px;}
    h4{font-size:18px;}
    p{margin:0 0 10px;}
    ul{margin-top:0;margin-bottom:10px;}
    .row{margin-right:-15px;margin-left:-15px;}
    .form-control{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;}
    .form-control:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);}
    .form-control::-moz-placeholder{color:#999;opacity:1;}
    .form-control:-ms-input-placeholder{color:#999;}
    .form-control::-webkit-input-placeholder{color:#999;}
    .form-control::-ms-expand{background-color:transparent;border:0;}
    .btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px;}
    .btn.active:focus,.btn:active:focus,.btn:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px;}
    .btn:focus,.btn:hover{color:#333;text-decoration:none;}
    .btn.active,.btn:active{background-image:none;outline:0;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125);}
    .btn-primary{color:#fff;background-color:#337ab7;border-color:#2e6da4;}
    .btn-primary:focus{color:#fff;background-color:#286090;border-color:#122b40;}
    .btn-primary:hover{color:#fff;background-color:#286090;border-color:#204d74;}
    .btn-primary.active,.btn-primary:active{color:#fff;background-color:#286090;border-color:#204d74;}
    .btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active:focus,.btn-primary:active:hover{color:#fff;background-color:#204d74;border-color:#122b40;}
    .btn-primary.active,.btn-primary:active{background-image:none;}
    .fade{opacity:0;-webkit-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear;}
    .btn-group-vertical{position:relative;display:inline-block;vertical-align:middle;}
    .btn-group-vertical>.btn{position:relative;float:left;}
    .btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover{z-index:2;}
    .btn-group-vertical>.btn{display:block;float:none;width:100%;max-width:100%;}
    .btn-group-vertical>.btn+.btn{margin-top:-1px;margin-left:0;}
    .btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0;}
    .btn-group-vertical>.btn:first-child:not(:last-child){border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0;}
    .btn-group-vertical>.btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px;}
    .close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2;}
    .close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;filter:alpha(opacity=50);opacity:.5;}
    button.close{-webkit-appearance:none;padding:0;cursor:pointer;background:0 0;border:0;}
    .modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;-webkit-overflow-scrolling:touch;outline:0;}
    .modal.fade .modal-dialog{-webkit-transition:-webkit-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:-webkit-transform .3s ease-out;-o-transition:transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out, -webkit-transform .3s ease-out;-webkit-transform:translate(0,-25%);-ms-transform:translate(0,-25%);transform:translate(0,-25%);}
    .modal-dialog{position:relative;width:auto;margin:10px;}
    .modal-content{position:relative;background-color:#fff;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5);}
    .modal-header{padding:15px;border-bottom:1px solid #e5e5e5;}
    .modal-header .close{margin-top:-2px;}
    .modal-title{margin:0;line-height:1.42857143;}
    .modal-body{position:relative;padding:15px;}
    @media (min-width:768px){
    .modal-dialog{width:600px;margin:30px auto;}
    .modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,.5);box-shadow:0 5px 15px rgba(0,0,0,.5);}
    }
    .modal-header:after,.modal-header:before,.row:after,.row:before{display:table;content:" ";}
    .modal-header:after,.row:after{clear:both;}
    /*! CSS Used from: Embedded */
    .fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
    .fa-camera:before{content:"\\F030";}
    .fa-cloud-download:before{content:"\\F0ED";}
    .fa-crop:before{content:"\\F125";}
    .fa-share-alt:before{content:"\\F1E0";}
    /*! CSS Used from: Embedded */
    body:not(&) .react-clustergrammer-box_d3-tip{line-height:1.25;font-weight:bold;padding:12px;background:rgba(0,0,0,0.8);color:#fff;border-radius:2px;max-width:500px;}
    .icon_buttons{color:#337ab7;}
    .sidebar_text{font-weight:300;font-size:14px;line-height:1.1;}
    .sidebar_button_text{font-size:13px;font-weight:300;}
    .btn{padding-top:2px;padding-bottom:2px;}
    .btn-group-vertical > .btn:not(:first-child):not(:last-child){border-radius:0;}
    .btn-group-vertical > .btn + .btn{margin-top:-1px;margin-left:0;}
    .btn-group-vertical > .btn.active{z-index:2;}
    .btn-group-vertical > .btn{display:block;float:none;width:100%;max-width:100%;}
    .btn-group-vertical > .btn{position:relative;float:left;}
    .btn-primary.active{background-image:none;}
    .btn-primary.active{color:#fff;background-color:#286090;border-color:#204d74;}
    .btn.active{background-image:none;outline:0;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125);}
    .btn{font-family:inherit;display:inline-block;margin-bottom:0;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px;}
    .btn-primary{color:#fff;background-color:#337ab7;border-color:#2e6da4;}
    .toggle_row_order{position:relative;display:inline-block;vertical-align:middle;}
    .sidebar_tooltip{position:relative;display:inline-block;}
    .sidebar_tooltip .sidebar_tooltip_text{visibility:hidden;width:120px;background:rgba(0,0,0,1);color:#fff;text-align:center;border-radius:6px;padding:5px 0;position:absolute;z-index:1000;top:100%;font-size:15px;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:13px;font-weight:bold;}
    .sidebar_tooltip:hover .sidebar_tooltip_text{visibility:visible;}
    div.awesomplete > ul{z-index:99;}
    .form-control{font-family:inherit;display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;-webkit-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;}
    button input{margin:0;font:inherit;color:inherit;}
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

  componentDidMount() {
    this.draw();
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
