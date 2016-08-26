'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaymentStatus = function (_React$Component) {
  _inherits(PaymentStatus, _React$Component);

  function PaymentStatus(props) {
    _classCallCheck(this, PaymentStatus);

    var _this = _possibleConstructorReturn(this, (PaymentStatus.__proto__ || Object.getPrototypeOf(PaymentStatus)).call(this, props));

    _this.state = {
      total: 0,
      balance: 0,
      paymentStatus: '',
      purchase: false
    };

    _this.purchaseMessages = {
      purchaseOrder: 'Purchase order',
      paymentInFull: 'Payment in full',
      noPaymentReceived: 'No payment received',
      partGreater: 'Partial payment greater than 50%',
      partLess: 'Partial payment less than 50%'
    };

    _this.onBalanceChange = function (balance) {
      _this.setState({ balance: balance });
    };
    _this.onBalanceBlur = function (balance) {
      balance = _this.parseFloatBussinesValues(balance);
      _this.setState({ balance: balance }, function () {
        return _this.props.onChange(_this.prepareExternalState(_this.state));
      });
    };
    _this.onTotalChange = function (total) {
      _this.setState({ total: total });
    };
    _this.onTotalBlur = function (total) {
      total = _this.parseFloatBussinesValues(total);
      _this.setState({ total: total }, function () {
        return _this.props.onChange(_this.prepareExternalState(_this.state));
      });
    };
    _this.onTogglePurchase = function (purchase) {
      _this.setState({ purchase: purchase }, function () {
        return _this.props.onChange(_this.prepareExternalState(_this.state));
      });
    };

    _this.onTogglePurchase.bind(_this);
    _this.onTotalChange.bind(_this);
    _this.onBalanceChange.bind(_this);
    return _this;
  }

  _createClass(PaymentStatus, [{
    key: 'parseFloatBussinesValues',
    value: function parseFloatBussinesValues(value) {
      var render = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      if (typeof value === 'string') {
        value = value.replace(/,/g, '');
      }

      value = parseFloat(value);

      if (isNaN(value)) {
        value = 0;
      }

      if (render || !value) {
        return value;
      }

      value = value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      return value;
    }
  }, {
    key: 'prepareExternalState',
    value: function prepareExternalState(state) {
      var clonnedState = JSON.parse(JSON.stringify(state));
      clonnedState.balance = this.parseFloatBussinesValues(clonnedState.balance, true);
      clonnedState.total = this.parseFloatBussinesValues(clonnedState.total, true);

      return clonnedState;
    }
  }, {
    key: 'mapBussinesRules',
    value: function mapBussinesRules(state) {
      var hideTotal = false,
          hideBalance = false,
          paymentStatus = '',
          balance = this.parseFloatBussinesValues(state.balance, true),
          total = this.parseFloatBussinesValues(state.total, true);

      if (state.purchase) {
        hideTotal = true;
        hideBalance = true;
        paymentStatus = this.purchaseMessages.purchaseOrder;
      } else {
        if (balance == 0 && total == 0 || balance == total) {
          paymentStatus = this.purchaseMessages.noPaymentReceived;
        } else if (balance == 0) {
          paymentStatus = this.purchaseMessages.paymentInFull;
        } else if (balance / total * 100 <= 50) {
          paymentStatus = this.purchaseMessages.partGreater;
        } else if (balance / total * 100 > 50) {
          paymentStatus = this.purchaseMessages.partLess;
        }
      }

      return Object.assign(state, {
        hideTotal: hideTotal,
        hideBalance: hideBalance,
        paymentStatus: paymentStatus
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _mapBussinesRules = this.mapBussinesRules(this.state);

      var hideTotal = _mapBussinesRules.hideTotal;
      var hideBalance = _mapBussinesRules.hideBalance;
      var total = _mapBussinesRules.total;
      var balance = _mapBussinesRules.balance;
      var paymentStatus = _mapBussinesRules.paymentStatus;
      var purchase = _mapBussinesRules.purchase;

      var totalBalanceStyles = {
        display: 'flex',
        marginTop: '5px'
      };

      return _react2.default.createElement(
        'div',
        { className: 'PaymentStatus-root' },
        _react2.default.createElement(PurchaseField, {
          purchase: purchase,
          onToggle: this.onTogglePurchase
        }),
        _react2.default.createElement(
          'div',
          { style: totalBalanceStyles },
          _react2.default.createElement(TotalField, {
            total: total,
            hide: hideTotal,
            onChange: this.onTotalChange,
            onBlur: this.onTotalBlur
          }),
          _react2.default.createElement(BalanceField, {
            balance: balance,
            hide: hideBalance,
            onChange: this.onBalanceChange,
            onBlur: this.onBalanceBlur
          })
        ),
        _react2.default.createElement(PaymentStatusField, {
          paymentStatus: paymentStatus
        })
      );
    }
  }]);

  return PaymentStatus;
}(_react2.default.Component);

var PurchaseField = function (_React$Component2) {
  _inherits(PurchaseField, _React$Component2);

  function PurchaseField() {
    _classCallCheck(this, PurchaseField);

    var _this2 = _possibleConstructorReturn(this, (PurchaseField.__proto__ || Object.getPrototypeOf(PurchaseField)).call(this));

    _this2.onToggle = function (e, checked) {
      _this2.props.onToggle(!_this2.props.purchase);
    };
    return _this2;
  }

  _createClass(PurchaseField, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          { className: 'PaymentStatus-purchaseOrder--field' },
          _react2.default.createElement('input', { type: 'checkbox', checked: this.props.purchase, onChange: this.onToggle })
        ),
        _react2.default.createElement(
          'span',
          { className: 'PaymentStatus-purchaseOrder--label control-label', style: { marginLeft: '5px', fontWeight: 'bold' } },
          'Purchase order'
        )
      );
    }
  }]);

  return PurchaseField;
}(_react2.default.Component);

var BalanceField = function (_React$Component3) {
  _inherits(BalanceField, _React$Component3);

  function BalanceField() {
    _classCallCheck(this, BalanceField);

    var _this3 = _possibleConstructorReturn(this, (BalanceField.__proto__ || Object.getPrototypeOf(BalanceField)).call(this));

    _this3.onChange = function (e) {
      _this3.props.onChange(e.currentTarget.value);
    };
    _this3.onBlur = function (e) {
      _this3.props.onBlur(e.currentTarget.value);
    };
    return _this3;
  }

  _createClass(BalanceField, [{
    key: 'render',
    value: function render() {
      if (this.props.hide) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { style: { flex: 1, marginLeft: '5px' } },
        _react2.default.createElement(
          'span',
          { className: 'PaymentStatus-balance--label control-label' },
          'Balance'
        ),
        _react2.default.createElement(
          'div',
          { className: 'PaymentStatus-balance--field' },
          _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.props.balance, onChange: this.onChange, onBlur: this.onBlur })
        )
      );
    }
  }]);

  return BalanceField;
}(_react2.default.Component);

var TotalField = function (_React$Component4) {
  _inherits(TotalField, _React$Component4);

  function TotalField() {
    _classCallCheck(this, TotalField);

    var _this4 = _possibleConstructorReturn(this, (TotalField.__proto__ || Object.getPrototypeOf(TotalField)).call(this));

    _this4.onChange = function (e) {
      _this4.props.onChange(e.currentTarget.value);
    };
    _this4.onBlur = function (e) {
      _this4.props.onBlur(e.currentTarget.value);
    };
    return _this4;
  }

  _createClass(TotalField, [{
    key: 'render',
    value: function render() {
      if (this.props.hide) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { style: { flex: 1 } },
        _react2.default.createElement(
          'span',
          { className: 'PaymentStatus-total--label control-label' },
          'Total'
        ),
        _react2.default.createElement(
          'div',
          { className: 'PaymentStatus-total--field' },
          _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.props.total, onChange: this.onChange, onBlur: this.onBlur })
        )
      );
    }
  }]);

  return TotalField;
}(_react2.default.Component);

var PaymentStatusField = function (_React$Component5) {
  _inherits(PaymentStatusField, _React$Component5);

  function PaymentStatusField() {
    _classCallCheck(this, PaymentStatusField);

    return _possibleConstructorReturn(this, (PaymentStatusField.__proto__ || Object.getPrototypeOf(PaymentStatusField)).apply(this, arguments));
  }

  _createClass(PaymentStatusField, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { marginTop: '5px' } },
        _react2.default.createElement(
          'span',
          { className: 'PaymentStatus-paymentStatus--label control-label' },
          'Payment Status'
        ),
        _react2.default.createElement(
          'div',
          { className: 'PaymentStatus-paymentStatus--field' },
          _react2.default.createElement('input', { type: 'text', className: 'form-control', disabled: 'true', value: this.props.paymentStatus })
        )
      );
    }
  }]);

  return PaymentStatusField;
}(_react2.default.Component);

exports.default = PaymentStatus;