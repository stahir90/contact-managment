import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Text } from "../../components";

describe("Text Test", () => {
  test("Should Display Text", () => {
    render(<Text text={"Testing Via Jest"} />);
    expect(screen.getByText(/Testing Via Jest/i)).toBeVisible();
  });
});
