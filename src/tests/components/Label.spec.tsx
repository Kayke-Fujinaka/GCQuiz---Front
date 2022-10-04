import { Label } from "@/components";
import { theme } from "@styles/theme";
import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("Label Test", () => {
  it("Should render Label", () => {
    render(
      <ThemeProvider theme={theme}>
        <Label>Test</Label>
      </ThemeProvider>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("Should render Label with font size and weight", () => {
    render(
      <ThemeProvider theme={theme}>
        <Label>Test</Label>
      </ThemeProvider>
    );

    expect(screen.getByText("Test")).toHaveStyle({
      fontSize: theme.fonts.size.md,
      fontWeight: theme.fonts.weight.normal,
    });
  });

  it("Should render Label with color", () => {
    render(
      <ThemeProvider theme={theme}>
        <Label>Test</Label>
      </ThemeProvider>
    );

    expect(screen.getByText("Test")).toHaveStyle({
      color: theme.colors.white,
    });
  });
});
