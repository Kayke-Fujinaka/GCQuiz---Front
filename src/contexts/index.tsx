import { ThemeProvider } from "styled-components";

import { IChildren } from "@/interfaces";
import { theme } from "@/styles/theme";

import { AuthProvider } from "./useAuth";

export default function AppProvider({ children }: IChildren) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
