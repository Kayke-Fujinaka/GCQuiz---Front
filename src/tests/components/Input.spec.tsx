import { Input } from "@/components";
import { theme } from "@styles/theme";
import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("Input Test", () => {
  it("Should render Input", () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input id="name" type="text" placeholder="Insira seu nome" />
      </ThemeProvider>
    );

    const input = getByPlaceholderText("Insira seu nome");

    fireEvent.change(input, {
      target: { value: "test" },
    });

    expect(input).toHaveValue("test");
  });

  it("Should render Input with font size 0.75rem or xs", () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input id="name" type="text" placeholder="Insira seu nome" />
      </ThemeProvider>
    );

    const input = getByPlaceholderText("Insira seu nome");

    expect(input).toHaveStyle({
      fontSize: theme.fonts.size.xs,
    });
  });

  it("Should render Input with border styles", () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input id="name" type="text" placeholder="Insira seu nome" />
      </ThemeProvider>
    );

    const input = getByPlaceholderText("Insira seu nome");

    expect(input).toHaveStyle({
      border: theme.borderRadius.none,
      borderRadius: theme.borderRadius.md
    });
  });

  it("Should render Input with padding", () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input id="name" type="text" placeholder="Insira seu nome" />
      </ThemeProvider>
    );

    const input = getByPlaceholderText("Insira seu nome");

    expect(input).toHaveStyle({
      padding: theme.spacing[6],
    });
  });
});
