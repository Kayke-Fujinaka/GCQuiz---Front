import { UseTerms } from "@/layout/register/UseTerms";
import { theme } from "@styles/theme";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("Use Terms Test", () => {
  it("Should render UseTerms in register", () => {
    render(
      <ThemeProvider theme={theme}>
        <UseTerms
          name="useTerms"
          type="checkbox"
          onChange={jest.fn()}
          htmlFor="useTerms"
        >
          Aceito os termos de uso
        </UseTerms>
      </ThemeProvider>
    );

    expect(screen.getByText("Aceito os termos de uso")).toBeInTheDocument();
  });

  it("Should render UseTerms with font size", () => {
    render(
      <ThemeProvider theme={theme}>
        <UseTerms
          name="useTerms"
          type="checkbox"
          onChange={jest.fn()}
          htmlFor="useTerms"
        >
          Aceito os termos de uso
        </UseTerms>
      </ThemeProvider>
    );

    expect(screen.getByText("Aceito os termos de uso")).toHaveStyle({
      fontSize: theme.fonts.size.sm,
    });
  });

  it("Should render UseTerms with color", () => {
    render(
      <ThemeProvider theme={theme}>
        <UseTerms
          name="useTerms"
          type="checkbox"
          onChange={jest.fn()}
          htmlFor="useTerms"
        >
          Aceito os termos de uso
        </UseTerms>
      </ThemeProvider>
    );

    expect(screen.getByText("Aceito os termos de uso")).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it("Should render checkbox checked", () => {
    render(
      <ThemeProvider theme={theme}>
        <UseTerms
          name="useTerms"
          type="checkbox"
          onChange={jest.fn()}
          htmlFor="useTerms"
        >
          Aceito os termos de uso
        </UseTerms>
      </ThemeProvider>
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    waitFor(() => {
      expect(checkbox).toBeChecked();
    });
  });

  it("Should render checkbox with color checked", () => {
    render(
      <ThemeProvider theme={theme}>
        <UseTerms
          name="useTerms"
          type="checkbox"
          onChange={jest.fn()}
          htmlFor="useTerms"
        >
          Aceito os termos de uso
        </UseTerms>
      </ThemeProvider>
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.change(checkbox);

    waitFor(() => {
      expect(checkbox).toHaveStyle({
        backgroundColor: theme.colors.orange_300,
      });
    });
  });
});
