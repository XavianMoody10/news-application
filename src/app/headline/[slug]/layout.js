import Footer from "@/components/footer";
import Header from "@/components/header";
import SideNavigation from "@/components/side-navigation";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <SideNavigation />
      {children}
      <Footer />
    </>
  );
}
