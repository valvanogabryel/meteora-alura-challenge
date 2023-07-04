import { Header } from "@/components/Header";
import SwiperSlider from "@/components/SwiperSlider";
import { Categories } from "@/components/Categories";
import { Facilities } from "@/components/Facilities";
import { SignIn } from "@/components/SignIn";
import { Products } from "@/components/Products/Products";
import { Footer } from "@/components/Footer";
import { CategoryProvider } from "@/context/CategoryContext";

export default function Home() {
  return (
    <>
      <Header />

      <SwiperSlider />

      <main className="container m-auto">
        <CategoryProvider>
          <Categories />
          <Products />
        </CategoryProvider>
      </main>
      <Facilities />
      <SignIn />
      <Footer />
    </>
  );
}
