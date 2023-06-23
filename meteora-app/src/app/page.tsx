import { Header } from "@/components/Header";
import { Categories } from "@/components/Categories";
import { Facilities } from "@/components/Facilities";
import { SignIn } from "@/components/SignIn";
import { Footer } from "@/components/Footer";
import { Products } from "@/components/Products/Products";
import { Slideshow } from "@/components/Slideshow";

import { Banner } from "@/components/Banner";

export default function Home() {
  {
    /* FIXME: AJUSTAR O CÓDIGO DO SLIDER DO BANNER E DEIXÁ-LO RESPONSIVO*/
  }

  return (
    <>
      <Header />
      {/* <Banner /> */}

      <Slideshow />

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
