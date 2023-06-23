import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Categories } from "@/components/Categories";
import { Facilities } from "@/components/Facilities";
import { SignIn } from "@/components/SignIn";
import { Footer } from "@/components/Footer";
import Slideshow from "@/components/Slideshow";
import { Products } from "@/components/Products/Products";

export default function Home() {
  {
    /* TODO: SLIDER DE BANNER */
  }
  return (
    <>
      <Header />
      <Banner />
      {/* <Slideshow /> */}
      <main className="container m-auto">
        <Categories />
        <Products />
      </main>
      <Facilities />
      <SignIn />
      <Footer />
    </>
  );
}
