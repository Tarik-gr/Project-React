import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Landing from "../Components/Landing";

const MockLanding = () => (
  <BrowserRouter>
    <Landing />
  </BrowserRouter>
);

test("should renders inscription button", () => {
  render(<MockLanding />);
  const inscriptionBtn = screen.getByText(/inscription/i);
  expect(inscriptionBtn).toBeVisible();
});
test("should renders Connexion button", () => {
  render(<MockLanding />);
  const connexionBtn = screen.getByText(/connexion/i);
  expect(connexionBtn).toBeVisible();
});

test("should add Class leftBackground on bloc hover for the left column", () => {
  render(<MockLanding />);
  const leftCol = screen.getByTestId("left-col");
  expect(leftCol).not.toHaveClass("leftBackground");
  fireEvent.mouseEnter(leftCol);
  expect(leftCol).toHaveClass("leftBackground");
});

test("should add Class leftBackground on bloc hover for the right column", () => {
  render(<MockLanding />);
  const rightCol = screen.getByTestId("right-col");
  expect(rightCol).not.toHaveClass("leftBackground");
  fireEvent.mouseEnter(rightCol);
  expect(rightCol).toHaveClass("leftBackground");
});
