import "./globals.css";
import ThemeProvider from "./components/theme-provider";

export const metadata = {
  title: "Nafisa Jebin Mila Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
