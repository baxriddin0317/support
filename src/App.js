import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl px-10 mx-auto">
        {/* hero */}
        <section className="relative py-10">
          <h1 className="text-2xl md:text-4xl text-center text-blue-800 font-semibold mt-4">
          How can we help you?
          </h1>
          <div className="hidden md:inline-block">
            <img src="https://ssl.gstatic.com/support/content/images/static/homepage_header_background_v2.svg" alt="" />
          </div>
        </section>
        {/* cards section */}
        <Cards />
      </main>
      <Footer />
    </>
  );
}

export default App;
