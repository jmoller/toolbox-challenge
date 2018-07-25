import React, { Component } from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { postTexts } from "../../redux/texts/actions";
import tbLogo from "../../tbLogo.svg";

// Components
import TextFormContainer from "../../containers/TextForm/TextFormContainer";
import AppHolder from "./App.style.js";
import TXAlert from "../../components/TXAlert/TXAlert";

export class App extends Component {
  render() {
    const { text, errors } = this.props;

    return (
      <AppHolder>
        <img src={tbLogo} className="tbLogo" alt="toolbox logo svg" />

        <h2>Enter a message</h2>

        <TextFormContainer />

        {(text || errors) && (
          <TXAlert message={this.props.text} errors={this.props.errors} />
        )}
      </AppHolder>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.TextsReducer.text,
    errors: state.TextsReducer.error
  };
};

App.propTypes = {
  text: Proptypes.string,
  errors: Proptypes.string
};

export default connect(
  mapStateToProps,
  { postTexts }
)(App);
