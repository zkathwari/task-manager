import React from "react";
import { render } from "@testing-library/react";
import TaskContainer from "./TaskContainer";

test("renders learn react link", () => {
  const { getByText } = render(<TaskContainer />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
