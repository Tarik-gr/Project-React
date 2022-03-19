import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";

import "@testing-library/jest-dom";

import App from "../Components/App/App";

test("should render inscription form after clicking on inscription button", () => {
  render(<App />);
  const inscriptionBtn = screen.getByText(/inscription/i);
  expect(inscriptionBtn).toBeInTheDocument();
  fireEvent.click(inscriptionBtn);
  expect(screen.getByRole("heading", { name: "Inscription" }));
});

test("should render login form after clicking on the link", () => {
  render(<App />);
  const connexionBnt = screen.getByText(/connectez vous/i);
  expect(connexionBnt).toBeInTheDocument();
  fireEvent.click(connexionBnt);
  expect(screen.getByRole("heading", { name: "Connexion" }));
});
test("should render signUp form after clicking on the link", () => {
  render(<App />);
  const inscriptionBtn = screen.getByText(/inscrivez vous/i);
  expect(inscriptionBtn).toBeInTheDocument();
  fireEvent.click(inscriptionBtn);
  expect(screen.getByRole("heading", { name: "Inscription" }));
});

// enter to the quizz
test("should enter the quizz", async () => {
  render(<App />);
  const connexionBnt = screen.getByText(/connectez vous/i);
  expect(connexionBnt).toBeInTheDocument();
  fireEvent.click(connexionBnt);
  expect(screen.getByRole("heading", { name: "Connexion" }));
  const emailInput = screen.getByLabelText("Adresse E-mail");
  const pwdInput = screen.getByLabelText("Mot de passe");
  fireEvent.change(emailInput, { target: { value: "cultura@gmail.com" } });
  fireEvent.change(pwdInput, { target: { value: "23021992" } });
  const lvl = screen.findByText(/niveau facile/i);
  expect(lvl).toBeVisible;
});
