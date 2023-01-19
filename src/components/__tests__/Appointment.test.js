import React from "react";
import PropTypes from "prop-types";
import { render, cleanup } from "@testing-library/react";

import Appointment from "components/Appointment";

afterEach(cleanup);

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });

  // it("recieves interviewers prop as an array", () => {
  //   Appointment.propTypes = {
  //     interviewers: PropTypes.array.isRequired,
  //   };
  // });

  // it("received cancelInterview as a function", () => {
  //   Appointment.propTypes = {
  //     cancelInterview: PropTypes.array.isRequired,
  //   };
  // });
});
