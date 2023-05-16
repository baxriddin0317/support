import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

import imgSvg from "./assets/center-svg.svg";

function App() {
  return (
    <>
      <Header />
      <main className='max-w-7xl px-5 md:px-10 mx-auto'>
        {/* hero */}
        <section className='relative py-10'>
          <div className='max-w-xl xl:max-w-2xl mx-auto text-center'>
            <h1 className='text-2xl md:text-4xl  text-blue-800 font-semibold mt-4'>
              How can we help <span>you</span>
            </h1>
            <p className='text-gray-500 text-sm lg:text-base mt-5'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className='max-w-2xl mx-auto mt-5'>
            <img src={imgSvg} alt='Card' />
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
