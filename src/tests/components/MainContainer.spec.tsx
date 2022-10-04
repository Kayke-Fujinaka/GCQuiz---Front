import { MainContainer } from "@/components";
import { theme } from "@styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("Main Container Test", () => {
  it("Should render MainContainer", () => {
    render(
      <ThemeProvider theme={theme}>
        <MainContainer>
          <p>I'm children</p>
        </MainContainer>
      </ThemeProvider>
    );

    expect(screen.getByText("I'm children")).toBeInTheDocument();
  });
});
