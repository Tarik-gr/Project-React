import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../Components/Login";

const MockLogin = () => (
  <BrowserRouter>
    <Login />
  </BrowserRouter>
);

test("should render the login form", () => {
  const component = render(<MockLogin />);
  const emailInput = component.getByLabelText("Adresse E-mail");
  const pwdInput = component.getByLabelText("Mot de passe");
  expect(emailInput).toBeVisible();
  expect(pwdInput).toBeVisible();
});

test("should change the input value", () => {
  const component = render(<MockLogin />);
  const emailInput = component.getByLabelText("Adresse E-mail");
  const pwdInput = component.getByLabelText("Mot de passe");
  fireEvent.change(emailInput, { target: { value: "email" } });
  fireEvent.change(pwdInput, { target: { value: "pwd" } });
  expect(emailInput).toHaveValue("email");
  expect(pwdInput).toHaveValue("pwd");
});

test(" se connecter button should not be visible at the biginning, only after completing the form", () => {
  render(<MockLogin />);
  const seConnecter = screen.queryByText(/se connecter/i);
  expect(seConnecter).toBeNull();
  //complete the form
  const emailInput = screen.getByLabelText("Adresse E-mail");
  const pwdInput = screen.getByLabelText("Mot de passe");
  fireEvent.change(emailInput, { target: { value: "cultura@gmail.com" } });
  fireEvent.change(pwdInput, { target: { value: "123456" } });
  expect(screen.queryByText(/se connecter/i)).toBeVisible();
});
