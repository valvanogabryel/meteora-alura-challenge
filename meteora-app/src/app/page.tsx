import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Categories } from "@/components/Categories";
import { Products } from "@/components/Products";
import { Facilities } from "@/components/Facilities";
import { SignIn } from "@/components/SignIn";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      {/* !TODO: Products */}
      <Products />
      <Facilities />
      <SignIn />
      <Footer />
    </>
  );
}
