import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Levels from "../Components/Levels";

const MockLevels = () => <Levels level="facile" idQuestion="3" score="5" />;

test("should render all the given information", () => {
  const component = render(<MockLevels />);
  expect(component.getByRole("heading")).toBeVisible();
  expect(component.getByRole("heading").innerHTML).toBe("Niveau facile");
  expect(component.getByText(/question/i).innerHTML).toBe("Question : 3/10");
  expect(component.getByText(/score/i).innerHTML).toBe("Score : 5");
});
