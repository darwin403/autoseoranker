import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <main className="flex-shrink-0">
        <Navbar />
        {children}
      </main>
      <Footer />
    </>
  );
}
