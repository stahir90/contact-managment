import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "../../components";

describe("Button Test", () => {
  test("Should Display Button", () => {
    render(<Button>Button Testing Via Jest</Button>);
    expect(screen.getByText(/Button Testing Via Jest/i)).toBeVisible();
  });
});
