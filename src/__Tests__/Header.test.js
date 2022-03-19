import { render, screen, fireEvent } from "@testing-library/react";

import Header from "../Components/Header";

test("header should be visible", () => {
  render(<Header />);
  const Heading = screen.getByRole("heading");
  expect(Heading).toBeVisible();
});
