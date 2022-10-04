import { theme } from "@styles/theme";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import RegisterLayout from "@/layout/register";
import { useAuth } from "@/hooks/useAuth";

const mockRouterPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

jest.mock("react-toastify", () => {
  const React = require("react");
  const actual = jest.requireActual("react-toastify");
  Object.assign(actual, {
    toast: {
      success: jest.fn(),
      error: jest.fn(),
    },
    ToastContainer: jest.fn(() => <div />),
  });
  return actual;
});

global.alert = jest.fn();

const { signUp } = useAuth();

describe("Register Layout Test", () => {
  it("Should render RegisterLayout", async () => {
    render(
      <ThemeProvider theme={theme}>
        <RegisterLayout />
      </ThemeProvider>
    );

    fireEvent.change(screen.getByPlaceholderText("Insira seu nome"), {
      target: { value: "John Dou" },
    });

    fireEvent.change(screen.getByPlaceholderText("Insira seu Email"), {
      target: { value: "johndou@gmail.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Insira sua senha"), {
      target: { value: "John123!!" },
    });

    fireEvent.click(screen.getByRole("checkbox"));

    fireEvent.click(
      screen.getByRole("button", {
        name: /registre\-se/i,
      })
    );

    waitFor(() => {
      expect(
        screen.getByText("Cadastrado com sucesso!")
      ).toBeInTheDocument();
    });
  });
});
