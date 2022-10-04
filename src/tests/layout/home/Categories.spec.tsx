import { Quizzes } from "@/layout/home/Quizzes";
import { theme } from "@styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

const quizzes = [
  {
    testid: 2,
    id: 2,
    name: "Tecnologia",
    urlImage:
      "https://tellus.org.br/wp-content/uploads/2019/12/curiosidade-importa-tellus.jpg",
  },
  {
    testid: 3,
    id: 3,
    name: "Curiosidades",
    urlImage:
      "https://tellus.org.br/wp-content/uploads/2019/12/curiosidade-importa-tellus.jpg",
  },
  {
    testid: 1,
    id: 1,
    name: "Finanças",
    urlImage:
      "https://tellus.org.br/wp-content/uploads/2019/12/curiosidade-importa-tellus.jpg",
  },
];

describe("Quizzes Test", () => {
  it("Should render QuizCards", () => {
    render(
      <ThemeProvider theme={theme}>
        <Quizzes />
      </ThemeProvider>
    );
    expect(screen.getByText("Categorias")).toBeInTheDocument();
    expect(screen.getByText("Finanças")).toBeInTheDocument();
  });

  // it("Should clicked in QuizCard", () => {
  //   render(
  //     <ThemeProvider theme={theme}>
  //       <Categories categories={categories} />
  //     </ThemeProvider>
  //   );

  //   fireEvent.click(screen.getByTestId("1"));
  // });
});
