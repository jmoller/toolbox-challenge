import { connect } from "react-redux";
import TextForm from "./TextForm";
import { reduxForm } from "redux-form";
import { postTexts } from "../../redux/texts/actions";
import {validateMessageInput} from '../../utilities/validation';

// The decorated Form component
// Desc: It takes the TextForm as a parameter in the reduxForm function to return a decorated container
// that let us make use of reduxForm functionalities
let TextFormContainer = reduxForm({
  form: "messageForm",
  validate: validateMessageInput,
  fields: ["message"]
})(TextForm);

TextFormContainer = connect(
  null,
  { postTexts }
)(TextFormContainer);

export default TextFormContainer;
