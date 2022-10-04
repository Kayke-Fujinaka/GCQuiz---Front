import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import { Input, TogglePassword } from "@/components";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useTogglePassword } from "@/hooks/useTogglePassword";

describe("Toggle Password Test", () => {
  it("Should render TogglePassword", () => {
    const { result } = renderHook(() => useTogglePassword());

    const { container } = render(
      <ThemeProvider theme={theme}>
        <TogglePassword type="button" onClick={result.current.togglePassword}>
          {result.current.typePassword ? (
            <AiFillEyeInvisible size={20} id="show" />
          ) : (
            <AiFillEye size={20} id="hide" />
          )}
        </TogglePassword>
      </ThemeProvider>
    );

    expect(container.querySelector("#hide")).toBeInTheDocument();
  });

  // ARRUMAR ESSE TESTE
  it("Should change to AiFillEyeInvisible", () => {
    const { result } = renderHook(() => useTogglePassword());

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Input
          id="password"
          type={result.current.typePassword ? "text" : "password"}
          placeholder="Insira sua senha"
        />

        <TogglePassword type="button" onClick={result.current.togglePassword}>
          {result.current.typePassword ? (
            <AiFillEyeInvisible size={20} id="show" />
          ) : (
            <AiFillEye size={20} id="hide" />
          )}
        </TogglePassword>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByRole("button"));

    waitFor(() => {
      expect(container.querySelector("#show")).toBeInTheDocument();
    });
  });
});
