import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import ShowCase from "@/components/ShowCase";
import Work from "@/components/Work";

export default function Home() {
  return (
    <section>
      {/* <Navbar /> */}
      <ShowCase />
      <AboutMe />
      <Services />
      <Work />
      <ContactMe />
      <Footer />
    </section>
  );
}
