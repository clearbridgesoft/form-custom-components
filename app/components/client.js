import CBSms from './cb-sms-sending/client';
import CBDateTime from './cb-datetime';
import CBLabel from './cb-label';
import CBPaymentStatus from './cb-payment-status';
import CBWysiwyg from './cb-wysiwyg';

import React from 'react';

//--------------------------------------------------------------------------------
// Form Factory to return the element for testing purpose
//--------------------------------------------------------------------------------
var FormFactory = {}; 

FormFactory.createComponent = (name, props) => { 
  switch (name) {
    case 'sms-sending': {
      return (<CBSms { ...props } />);
    } 
    case 'cb-datetime': {
      return (<CBDateTime { ... props } />);
    }
    case 'cb-label': {
      return (<CBLabel {... props } />);
    }
    case 'cb-payment-status': {
      return (<CBPaymentStatus { ...props } />);
    }
    case 'cb-wysiwyg': {
      return (<CBWysiwyg { ...props } />);
    }
    default: { 
      return (<div>This form elment does not exist</div>);
    }
  }
}


//--------------------------------------------------------------------------------
// Builder for the form
//--------------------------------------------------------------------------------
var ElementBuilder = (Component, props) => {
  let Element = React.createClass({
    render () {
      return <Component { ... props} />
    }
  });

  return Element;
}

FormFactory.createBuilder = (name, props) => {
  switch (name) {
    case 'sms-sending': {
      return ElementBuilder(CBSms, props);
    } 
    case 'cb-datetime': {
      return ElementBuilder(CBDateTime, props);
    }
    case 'cb-label': {
      return ElementBuilder(CBLabel, props);
    }
    case 'cb-payment-status': {
      return ElementBuilder(CBPaymentStatus, props);
    }
    case 'cb-wysiwyg': {
      return ElementBuilder(CBWysiwyg, props);
    }
    default: { 
      return null;
    }
  }
} 

module.exports = FormFactory;