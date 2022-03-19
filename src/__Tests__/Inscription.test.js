import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Signup from "../Components/Signup";

const MockSignUp = () => (
  <BrowserRouter>
    <Signup />
  </BrowserRouter>
);

test("should render the form", () => {
  const component = render(<MockSignUp />);
  const pseudoInput = component.getByRole("textbox", { name: "Pseudo" });
  const emailInput = component.getByRole("textbox", { name: "Adresse E-mail" });
  const passInput = component.getByText("Mot de passe");
  const lien = component.getByRole("link");
  expect(pseudoInput).toBeVisible();
  expect(emailInput).toBeVisible();
  expect(passInput).toBeVisible();
  expect(lien).toBeVisible();
});

test("should change input value", () => {
  const component = render(<MockSignUp />);
  const pseudoInput = component.getByRole("textbox", { name: "Pseudo" });
  const emailInput = component.getByRole("textbox", { name: "Adresse E-mail" });
  const passInput = component.getByLabelText("Mot de passe"); // return an input element
  fireEvent.change(pseudoInput, { target: { value: "pseudo" } });
  fireEvent.change(emailInput, { target: { value: "mail" } });
  fireEvent.change(passInput, { target: { value: "pass" } });
  expect(pseudoInput).toHaveValue("pseudo");
  expect(emailInput).toHaveValue("mail");
  expect(passInput).toHaveValue("pass");
});

test("should valider button not be visible and then visible after completing the form", () => {
  const component = render(<MockSignUp />);
  const inscriptionBtn = component.queryByText("S'inscrire");
  expect(inscriptionBtn).toBeNull();
  const pseudoInput = component.getByRole("textbox", { name: "Pseudo" });
  const emailInput = component.getByRole("textbox", { name: "Adresse E-mail" });
  const passInput = component.getByLabelText("Mot de passe"); // return an input element
  const passInput2 = component.getByLabelText("Confirmer le mot de passe"); // return an input element
  fireEvent.change(pseudoInput, { target: { value: "pseudo" } });
  fireEvent.change(emailInput, { target: { value: "mail" } });
  fireEvent.change(passInput, { target: { value: "pass" } });
  fireEvent.change(passInput2, { target: { value: "pass" } });
  const btn = component.queryByText("S'inscrire");
  expect(btn).toBeVisible();
});
