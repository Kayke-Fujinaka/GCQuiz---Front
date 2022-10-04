import { Header } from "@/components";
import { theme } from "@styles/theme";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import { createMockRouter } from "../test-utils/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";
import IntroductionLayout from "@/layout/introduction";
import Router from "next/router";

describe("Header Test", () => {
  it("Should redict to Home Page", () => {
    const router = createMockRouter({
      asPath: "/",
    });

    render(
      <ThemeProvider theme={theme}>
        <RouterContext.Provider value={router}>
          <Header />
        </RouterContext.Provider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByRole("link", { name: /início/i }));
    expect(router.push).toHaveBeenCalled();
  });

  it("Should render Header in Introduction Page", () => {
    const router = createMockRouter({
      asPath: "/introduction",
    });

    render(
      <ThemeProvider theme={theme}>
        <RouterContext.Provider value={router}>
          <Header />
        </RouterContext.Provider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByRole("link", { name: /início/i }));
    expect(router.push).toHaveBeenCalled();
  });

  it("Should render Header in Introduction Page", () => {
    const router = createMockRouter({
      asPath: "/introduction",
    });

    render(
      <ThemeProvider theme={theme}>
        <RouterContext.Provider value={router}>
          <Header />
        </RouterContext.Provider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByRole("link", { name: /início/i }));
    expect(router.push).toHaveBeenCalled();
  });

  // Incompleto
  //   const router = createMockRouter({
  // it("Should logout user and redirect to Login Page", () => {
  //     asPath: "/",
  //   });

  //   render(
  //     <ThemeProvider theme={theme}>
  //       <RouterContext.Provider value={router}>
  //         <Header />
  //       </RouterContext.Provider>
  //     </ThemeProvider>
  //   );

  //   fireEvent.click(
  //     screen.getByRole("button", {
  //       name: /sair/i,
  //     })
  //   );
  //   expect(router.push).toHaveBeenCalled();
  // });
});
