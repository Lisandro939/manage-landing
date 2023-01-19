import FirstSection from "@/components/FirstSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InitProduct from "@/components/InitProduct";
import Opinions from "@/components/Opinions";
import SecondSection from "@/components/SecondSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 justify-start items-center">
        <Header />
        <FirstSection />
        <SecondSection />
        <Opinions />
        <div className="flex flex-col">
          <InitProduct />
          <Footer />
        </div>
    </div>
  )
}
