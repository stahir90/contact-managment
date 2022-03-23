import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ContactList from "../module/contactList";
import { BrowserRouter } from "react-router-dom";

describe("CharacterList Test", () => {
  test("Should Display Empty List Layout", () => {
    render(
      <BrowserRouter>
        <ContactList />
      </BrowserRouter>
    );
    expect(screen.getByText(/Users/i)).toBeVisible();
  });
});
