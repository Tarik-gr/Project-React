import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Logout from "../Components/Logout";

const MockLogout = () => <Logout />;

test("should render the logout button", () => {
  const component = render(<MockLogout />);
  const logoutBtn = component.getByText(/se déconnecter/i);
  expect(logoutBtn).toBeVisible();
});
