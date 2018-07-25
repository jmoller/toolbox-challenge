// Validate function to be passed to the reduxForm function
// Desc: asserts that the message input has a value and it's not empty
export const validateMessageInput = values => {
  const { message } = values;
  const errors = {};
  if (!message || message.trim === "") {
    errors.message = "A message is required";
  }
  return errors;
};