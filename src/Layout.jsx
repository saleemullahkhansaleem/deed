import { Outlet } from "react-router-dom";
import { Footer, Header, ScrollToTop } from "./components";

export default function Layout() {
  return (
    <main className="bg-background text-secondary">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
