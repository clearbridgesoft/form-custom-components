var React = require('react');

var SmsElement = React.createClass({
  _sendSMS() {
    let content = this.refs['sms-content'].value;

    let { action } = this.props;
    action(content);
  },
  render() {
    return (
      <div>
        <textarea ref="sms-content"></textarea>
        <button onClick={ this._sendSMS }> Send SMS </button>
      </div>
    )
  }
});

SmsElement.propTypes = {
  action: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired
};

module.exports = SmsElement;
