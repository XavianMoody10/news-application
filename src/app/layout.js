import SideNavigationProvider from "@/contexts/side-navigation-context";
import "./globals.css";
import ReactQueryProvider from "@/providers/react-query-provider";

export const metadata = {
  title: "News Application",
  description: "A simple news application that is built with Nextjs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <SideNavigationProvider>
          <body>{children}</body>
        </SideNavigationProvider>
      </ReactQueryProvider>
    </html>
  );
}
