import React from 'react';
import styles from './App.css';

import FormFactory from './components';
import axios from 'axios';

//--------------------------------------------------------------------------------
// Main component in order to test the elements
//--------------------------------------------------------------------------------

let form_element_names = ['sms-sending', 'cb-datetime', 'cb-label', 'cb-payment-status', 'cb-wysiwyg'];
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          form_element_names.map((name) => {
            return FormFactory.createComponent(name, {
              action: () => axios.get('/sendSMS').then(
                (res) => console.log(res)
              ).catch(
                (err) => console.log(err)
              ),
              onChange: () => console.log('onChange')
            })
          })
        }
        
      </div>
    );
  }
}
