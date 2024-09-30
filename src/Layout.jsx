import { Outlet } from "react-router-dom";
import { Footer, Header, ScrollToTop } from "./components";

export default function Layout() {
  return (
    <main className="font-archivo bg-background text-secondary">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
