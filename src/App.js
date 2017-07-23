import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { render } from "react-dom";
 
import Form from "react-jsonschema-form";
 
const schema = {
  title: "Arin lomake",
  type: "object",
  required: ["title","message"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    message: {type: "string", title: "Message", default: "Write something..."},
    pass1: {type: "string", title: "Give password"},
    pass2: {type: "string", title: "Repeat password"},
    date: {type: "string", title: "Date", format: "date"}, 
    done: {type: "boolean", title: "Done?", default: false}
  }
};

const uiSchema = {
  message: {"ui:widget": "textarea"},
  pass1:{"ui:widget": "password"},
  pass2:{"ui:widget": "password"}
}

const log = (type) => console.log.bind(console, type);

function validate(formData, errors) {
  if (formData.pass1 !== formData.pass2) {
    errors.pass2.addError("Passwords don't match");
  }
  return errors;
}

class App extends Component {

render() {
return (

  <Form schema={schema}
        uiSchema={uiSchema}
        validate={validate}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
)}

}



export default App;
