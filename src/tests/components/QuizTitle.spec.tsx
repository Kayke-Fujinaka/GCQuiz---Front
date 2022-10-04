import { QuizTitle } from "@/components";
import { theme } from "@styles/theme";
import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("Use Terms Test", () => {
  it("Should render QuizTitle in Quiz Page", () => {
    render(
      <ThemeProvider theme={theme}>
        <QuizTitle title="Finanças Quiz" subtitle="Leia e siga as instruções" />
      </ThemeProvider>
    );

    expect(screen.getByText("Finanças Quiz")).toBeInTheDocument();
  });

  it("Should render QuizTitle with font size", () => {
    render(
      <ThemeProvider theme={theme}>
        <QuizTitle title="Finanças Quiz" subtitle="Leia e siga as instruções" />
      </ThemeProvider>
    );

    expect(screen.getByText("Finanças Quiz")).toHaveStyle({
      fontSize: theme.fonts.size.lg,
    });
  });

  it("Should render QuizTitle with color", () => {
    render(
      <ThemeProvider theme={theme}>
        <QuizTitle title="Finanças Quiz" subtitle="Leia e siga as instruções" />
      </ThemeProvider>
    );

    expect(screen.getByText("Finanças Quiz")).toHaveStyle({
      color: theme.colors.brown_900,
    });
  });
});
