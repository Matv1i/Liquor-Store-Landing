import Hero from "./Sections/Hero"
import CustomerReviews from "./Sections/CustomerReviews"
import Footer from "./Sections/Footer"
import Nav from "./Components/Nav"
import Services from "./Sections/Services"
import Subscribe from "./Sections/Subscribe"
import SuperQuality from "./Sections/SuperQuality"
import PopularProducts from "./Sections/PopularProducts"
import SuperOffer from "./Sections/SuperOffer"

const App = () => {
  return (
    <main className="relative bg-black-bit">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SuperOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-10 w-full">
        <Subscribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-4">
        <Footer />
      </section>
    </main>
  )
}

export default App
