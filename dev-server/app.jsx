import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from 'react-jsonschema-form';
import CustomComponent from '../src';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={selected:undefined};
  }
  onSubmit(formSchema){
    console.log(formSchema);
  }
  renderForm(){
    //if(!this.state.selected) return null;
    return <Form
               schema={{type:'string'}}
               uiSchema={{"ui:widget":"wysiwyg"}}
               widgets={CustomComponent.widgets}
               fields={CustomComponent.fields}
           />
  }
  render(){
    console.log(CustomComponent);
    console.log(Object.keys(CustomComponent.widgets));
    console.log(Object.keys(CustomComponent.fields));
    return (<div>
        <fieldset>
          <legend>widgets</legend>
            {Object.keys(CustomComponent.widgets).map((name)=>{console.log(name);return (
               <div key={"widget."+name} ><input type="radio" id={"widget."+name} name="c" value={name}/><label htmlFor={"widget."+name}>{name}</label></div>)})}

        </fieldset>
        <fieldset>
          <legend>fields</legend>
            {Object.keys(CustomComponent.fields).map((name)=>(
               <div key={"fields."+name}><input type="radio" id={"fields."+name}  name="c" value={name}/><label htmlFor={"fields."+name}>{name}</label></div>
             ))}
        </fieldset>
        <hr />
        {this.renderForm()}
    </div>)

  }
}


render(<App />, document.getElementById('app'));
