import { ContentAuth } from "@/components";
import { theme } from "@styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("Content Auth Test", () => {
  it("Should render ContentAuth", () => {
    render(
      <ThemeProvider theme={theme}>
        <ContentAuth>
          <p>I'm children</p>
        </ContentAuth>
      </ThemeProvider>
    );
    expect(screen.getByText("I'm children")).toBeInTheDocument();
  });
});
