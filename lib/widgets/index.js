'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wysiwyg = require('./wysiwyg');

var _wysiwyg2 = _interopRequireDefault(_wysiwyg);

var _html = require('./html');

var _html2 = _interopRequireDefault(_html);

var _dateTime = require('./dateTime');

var _dateTime2 = _interopRequireDefault(_dateTime);

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  wysiwyg: _wysiwyg2.default,
  html: _html2.default,
  dateTime: _dateTime2.default,
  label: _label2.default
};