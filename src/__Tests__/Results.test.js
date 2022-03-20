import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Questions } from "../Components/Questions";
import Results from "../Components/Results";

const goodAnswers = Questions[0].quiz["facile"].map((e) => e.answer);
const badAnswers = Questions[0].quiz["facile"].map((e) => "dummyAnswer");

const MockResults = () => (
  <Results
    score="2"
    datas={Questions[0].quiz["facile"]}
    userAnswers={goodAnswers}
  />
);

test("should render the score", () => {
  const component = render(<MockResults />);
  expect(component.getByText(/votre score est de/i).innerHTML).toBe(
    "Votre score est de 20%"
  );
});

test("should render the recommencer Button and Niveau Suivant btn", () => {
  const component = render(<MockResults />);
  expect(component.getByText(/recommencer/i)).toBeVisible();
  expect(component.getByText(/niveau suivant/i)).toBeVisible();
});

test("should render the score in green when more than 60% ", () => {
  const component = render(
    <Results
      score="7"
      datas={Questions[0].quiz["facile"]}
      userAnswers={goodAnswers}
    />
  );
  const text = component.getByText(/votre score est de 70%/i);
  expect(text).toHaveStyle("color:green");
});
test("should render all the quesitons and answers", () => {
  const component = render(<MockResults />);
  const table = component.getAllByTestId("row-result");
  console.log("table ", table);
  expect(table.length).toBe(10);
});
test("should render the correct answers in green", () => {
  const component = render(<MockResults />);
  const table = component.getAllByTestId("answers");
  table.forEach((e) => expect(e).toHaveStyle("color:green"));
});
test("should render the false answers in red", () => {
  const component = render(
    <Results
      score="2"
      datas={Questions[0].quiz["facile"]}
      userAnswers={badAnswers}
    />
  );
  const table = component.getAllByTestId("answers");
  table.forEach((e) => expect(e).toHaveStyle("color:red"));
});
