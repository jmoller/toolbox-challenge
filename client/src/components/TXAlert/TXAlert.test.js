import React from "react";
import { shallow, mount } from "enzyme";
import TXAlert from "./TXAlert";

describe("TXAlert", () => {
  const txalert = shallow(<TXAlert />);

  it("renders TXAlert correctly", () => {
    expect(txalert).toMatchSnapshot();
  });

  describe("the user submits a message", () => {
    let txalertWithProps = "";
    beforeEach(() => {
      const props = { message: "This is a mock message" };
      txalertWithProps = shallow(<TXAlert {...props} />);
    });

    it("displays the alert with the `success` class attaches to it", () => {
      expect(txalertWithProps.props().bsStyle).toEqual("success");
    });

    it("displays the alert with the title equal to `Success!`", () => {
      const expectedTitle = "Response From Server:";
      expect(txalertWithProps.find("strong").text()).toEqual(expectedTitle);
    });

    it("displays the alert description with the message properly set into it", () => {
      const expectedDescription = "This is a mock message";
      expect(txalertWithProps.find("p").text()).toEqual(expectedDescription);
    });

    
  });

  describe("the user submits a an empty message", () => {
    let txalertWithProps = "";
    beforeEach(() => {
      const props = { errors: "This is a mock error" };
      txalertWithProps = shallow(<TXAlert {...props} />);
    });

    it("displays the alert with the `danger` class attaches to it", () => {
      expect(txalertWithProps.props().bsStyle).toEqual("danger");
    });

    it("displays the alert with the title equal to `Error`", () => {
      const expectedTitle = "Error: ";
      expect(txalertWithProps.find("strong").text()).toEqual(expectedTitle);
    });

    it("displays the alert description with the message properly set into it", () => {
      const expectedDescription = "This is a mock error";
      expect(txalertWithProps.find("p").text()).toEqual(expectedDescription);
    });
  });
});
