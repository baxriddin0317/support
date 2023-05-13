import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <Header />
      <main className='max-w-7xl px-10 mx-auto'>
        {/* hero */}
        <section className='relative py-10'>
          <h1 className='text-2xl md:text-4xl text-center text-blue-800 font-semibold mt-4'>
            How can we help you?
          </h1>
          <div className='hidden md:inline-block'>
            <img
              src='https://ssl.gstatic.com/support/content/images/static/homepage_header_background_v2.svg'
              alt='Card'
            />
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
