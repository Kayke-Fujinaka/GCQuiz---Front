import { ContainerAuth } from "@/components";
import { theme } from "@styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("Container Auth Test", () => {
  it("Should render ContainerAuth", () => {
    render(
      <ThemeProvider theme={theme}>
        <ContainerAuth>
          <p>I'm children</p>
        </ContainerAuth>
      </ThemeProvider>
    );

    expect(screen.getByText("I'm children")).toBeInTheDocument();
  });
});
