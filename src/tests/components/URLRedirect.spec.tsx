import { URLRedirect } from "@/components";
import { theme } from "@styles/theme";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("URL Redirect Test", () => {
  it("Should render URLRedirect in register", () => {
    render(
      <ThemeProvider theme={theme}>
        <URLRedirect
          text="Já possui uma conta?&nbsp;"
          hyperLink="Faça login"
          link="./login"
        />
      </ThemeProvider>
    );

    expect(screen.getByText("Já possui uma conta?")).toBeInTheDocument();
    expect(screen.getByText("Faça login")).toBeInTheDocument();
  });

  it("Should render URLRedirect in login", () => {
    render(
      <ThemeProvider theme={theme}>
        <URLRedirect
          text="Não tem uma conta?&nbsp;"
          hyperLink="Registre-se"
          link="./register"
        />
      </ThemeProvider>
    );

    expect(screen.getByText("Não tem uma conta?")).toBeInTheDocument();
    expect(screen.getByText("Registre-se")).toBeInTheDocument();
  });

  it("Should redirect to login page", () => {
    render(
      <ThemeProvider theme={theme}>
        <URLRedirect
          text="Já possui uma conta?&nbsp;"
          hyperLink="Faça login"
          link="./login"
        />
      </ThemeProvider>
    );

    const hyperlink = screen.getByText("Faça login");

    fireEvent.click(hyperlink);

    waitFor(() => {
      expect(screen.getByText("Não tem uma conta?")).toBeInTheDocument();
    });
  });

  it("Should redirect to register page", () => {
    render(
      <ThemeProvider theme={theme}>
        <URLRedirect
          text="Não tem uma conta?&nbsp;"
          hyperLink="Registre-se"
          link="./register"
        />
      </ThemeProvider>
    );

    const hyperlink = screen.getByText("Registre-se");

    fireEvent.click(hyperlink);

    waitFor(() => {
      expect(screen.getByText("Já possui uma conta?")).toBeInTheDocument();
    });
  });

  it("Should render URLRedirect with font size", () => {
    render(
      <ThemeProvider theme={theme}>
        <URLRedirect
          text="Não tem uma conta?&nbsp;"
          hyperLink="Registre-se"
          link="./register"
        />
      </ThemeProvider>
    );

    expect(screen.getByText("Não tem uma conta?")).toHaveStyle({
      fontSize: theme.fonts.size.md,
    });
  });

  it("Should render URLRedirect with color", () => {
    render(
      <ThemeProvider theme={theme}>
        <URLRedirect
          text="Não tem uma conta?&nbsp;"
          hyperLink="Registre-se"
          link="./register"
        />
      </ThemeProvider>
    );

    expect(screen.getByText("Não tem uma conta?")).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it("Should render URLRedirect with margin top", () => {
    render(
      <ThemeProvider theme={theme}>
        <URLRedirect
          text="Não tem uma conta?&nbsp;"
          hyperLink="Registre-se"
          link="./register"
        />
      </ThemeProvider>
    );

    expect(screen.getByText("Não tem uma conta?")).toHaveStyle({
      marginTop: theme.spacing[6],
    });
  });

  it("Should render hyperlink with font weight", () => {
    render(
      <ThemeProvider theme={theme}>
        <URLRedirect
          text="Não tem uma conta?&nbsp;"
          hyperLink="Registre-se"
          link="./register"
        />
      </ThemeProvider>
    );

    expect(screen.getByText("Registre-se")).toHaveStyle({
      fontWeight: theme.fonts.weight.semibold,
    });
  });
});
