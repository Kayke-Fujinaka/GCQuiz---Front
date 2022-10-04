import { Button } from "@/components";
import { theme } from "@styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BiLogOut } from "react-icons/bi";

describe("Button Test", () => {
  it("Should render Button", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Test</Button>
      </ThemeProvider>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("Should render Button with background beige", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Test</Button>
      </ThemeProvider>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle({
      backgroundColor: theme.colors.orange_300,
      color: theme.colors.white,
    });
  });

  it("Should render Button with background red", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button background="red">Test</Button>
      </ThemeProvider>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle({
      backgroundColor: theme.colors.red_500,
      color: theme.colors.white,
    });
  });

  it("Should render Button with background green", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button background="green">Test</Button>
      </ThemeProvider>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle({
      backgroundColor: theme.colors.green_500,
      color: theme.colors.white,
    });
  });

  it("Should render Button with full width", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button fullWidth>Test</Button>
      </ThemeProvider>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle({
      backgroundColor: theme.colors.orange_300,
      color: theme.colors.white,
      width: "100%",
    });
  });

  it("Should render Button with right icon", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>
          Test <BiLogOut data-testid="iconRight" />
        </Button>
      </ThemeProvider>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle({
      backgroundColor: theme.colors.orange_300,
      color: theme.colors.white,
    });
    expect(screen.getByRole("button")).toContainElement(
      screen.getByTestId("iconRight")
    );
  });

  it("Should render Button with left icon", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>
          <BiLogOut data-testid="iconLeft" /> Test
        </Button>
      </ThemeProvider>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle({
      backgroundColor: theme.colors.orange_300,
      color: theme.colors.white,
    });
    expect(screen.getByRole("button")).toContainElement(
      screen.getByTestId("iconLeft")
    );
  });
});
