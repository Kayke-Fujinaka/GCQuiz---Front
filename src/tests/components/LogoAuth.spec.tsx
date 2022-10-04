import { LogoAuth } from "@/components";
import { theme } from "@styles/theme";
import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("Logo Auth Test", () => {
  it("Should render LogoAuth in register", () => {
    render(
      <ThemeProvider theme={theme}>
        <LogoAuth title="Crie sua conta" />
      </ThemeProvider>
    );

    expect(screen.getByText("GCQuiz")).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /grupo gcb logo/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText("Crie sua conta")).toBeInTheDocument();
  });

  it("Should render LogoAuth in login", () => {
    render(
      <ThemeProvider theme={theme}>
        <LogoAuth
          title="Entre na sua conta"
          subtitle="com seu email registrado"
        />
      </ThemeProvider>
    );

    expect(screen.getByText("GCQuiz")).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /grupo gcb logo/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText("Entre na sua conta")).toBeInTheDocument();
    expect(screen.getByText("com seu email registrado")).toBeInTheDocument();
  });

  it("Should render LogoAuth with color", () => {
    render(
      <ThemeProvider theme={theme}>
        <LogoAuth
          title="Entre na sua conta"
          subtitle="com seu email registrado"
        />
      </ThemeProvider>
    );

    expect(screen.getByText("Entre na sua conta")).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it("Should render LogoAuth with font size and weight h1", () => {
    render(
      <ThemeProvider theme={theme}>
        <LogoAuth
          title="Entre na sua conta"
          subtitle="com seu email registrado"
        />
      </ThemeProvider>
    );

    expect(screen.getByText("Entre na sua conta")).toHaveStyle({
        fontSize: theme.fonts.size.xl1,
        fontWeight: theme.fonts.weight.bold,
    });
  });

  it("Should render LogoAuth with font size and weight h3", () => {
    render(
      <ThemeProvider theme={theme}>
        <LogoAuth
          title="Entre na sua conta"
          subtitle="com seu email registrado"
        />
      </ThemeProvider>
    );

    expect(screen.getByText("com seu email registrado")).toHaveStyle({
        fontSize: theme.fonts.size.md,
        fontWeight: theme.fonts.weight.normal,
    });
  });
});
