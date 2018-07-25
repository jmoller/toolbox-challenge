import React, { Component } from "react";
import { Field } from "redux-form";
import {
  FormGroup,
  FormControl,
  Button,
} from "react-bootstrap";

// Decoupled Message Input component for testing purposes
// Desc: This is the input component used by Field in redux-form
export const MessageInput = ({
  input,
  meta: { touched, error },
  ...custom
}) => {
  const hasError = touched && error !== undefined;

  const controlClass = hasError ? "message has-error" : "message";
  return (
    <React.Fragment>
      <FormControl
        type="text"
        placeholder="Example: Hello World!"
        className={controlClass}
        {...input}
        {...custom}
      />

      {hasError && (
        <p
          style={{
            marginTop: "1rem",
            color: "#c10000",
            letterSpacing: ".1rem",
            fontWeight: "600"
          }}
        >
          {error}
        </p>
      )}
    </React.Fragment>
  );
};

// Unconnected Textform component that will be decorated by the TextFormContainer 
// By spliting up the Form into two components, we can safly test TextForm as a regular component
class TextForm extends Component {
  submit(values, dispatch) {
    this.props.postTexts(values);
  }

  render() {
    const { handleSubmit } = this.props;
    const formStyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      minHeight: "30vh",
      width: "25rem"
    };

    return (
      <form style={formStyle} onSubmit={handleSubmit(this.submit.bind(this))}>
        <FormGroup>
          <Field name="message" component={MessageInput} />
        </FormGroup>

        <Button style={{ width: "100%" }} bsStyle="primary" type="submit">
          Send Message
        </Button>
      </form>
    );
  }
}

export default TextForm;
