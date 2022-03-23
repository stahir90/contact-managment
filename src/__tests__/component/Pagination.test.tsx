import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Pagination } from "../../components";

describe("Button Test", () => {
  test("Should Display Button", () => {
    render(<Pagination text={"Pagination Testing Via Jest"} />);
    expect(screen.getByText(/Pagination Testing Via Jest/i)).toBeVisible();
  });
});
