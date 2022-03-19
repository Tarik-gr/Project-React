import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "../Components/Footer/index";

test("Footer should be visible", () => {
  render(<Footer />);
  const text = screen.getByText(/Tarik/i);
  expect(text).toBeVisible();
});
