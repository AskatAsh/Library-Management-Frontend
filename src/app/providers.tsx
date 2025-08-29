import { ThemeProvider } from "@/providers/theme-provider";
import { store } from "@/store";
import type { PropsWithChildren } from "react";
import { Provider as ReduxProvider } from "react-redux";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </ThemeProvider>
  );
}
