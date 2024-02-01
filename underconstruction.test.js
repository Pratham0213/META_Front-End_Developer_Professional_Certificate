import React from "react";
import { render, screen } from "@testing-library/react";
import UnderConstruction from "./UnderConstruction";

test("renders UnderConstruction component without errors", () => {
  render(<UnderConstruction />);

  // Verificartion of component
  expect(screen.getByTestId("under-construction")).toBeInTheDocument();
  expect(screen.getByText("Under Construction")).toBeInTheDocument();
});