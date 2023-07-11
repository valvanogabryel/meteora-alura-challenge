import { Header } from "@/components/Header";
import SwiperSlider from "@/components/SwiperSlider";
import { Categories } from "@/components/Categories";
import { Ease } from "@/components/Ease";
import { SignIn } from "@/components/SignIn";
import { Products } from "@/components/Products/Products";
import { Footer } from "@/components/Footer";
import { CategoryProvider } from "@/context/CategoryContext";
import { SearchProvider } from "@/context/SearchContext";

export default function Home() {
  return (
    <>
      <SearchProvider>
        <Header />

        <SwiperSlider />

        <main className="container m-auto">
          <CategoryProvider>
            <Categories />
            <Products />
          </CategoryProvider>
        </main>
      </SearchProvider>
      <Ease />
      <SignIn />
      <Footer />
    </>
  );
}
