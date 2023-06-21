import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Categories } from "@/components/Categories";
import { Products } from "@/components/Products";
import { Facilities } from "@/components/Facilities";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <Products />
      <Facilities />
    </>
  );
}
