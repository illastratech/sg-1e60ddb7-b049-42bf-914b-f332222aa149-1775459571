import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FeaturedVehicles } from "@/components/FeaturedVehicles";
import { MobileWhatsAppBar } from "@/components/MobileWhatsAppBar";

export default function Home() {
  return (
    <>
      <SEO
        title="Trixion Motors - Premium Japanese Vehicle Imports"
        description="Drive your dream car from Japan. Trusted Japanese vehicle imports with over 99% customer satisfaction. 125+ vehicles imported past year."
      />
      <Header />
      <main className="w-full max-w-none overflow-x-hidden pb-24 md:pb-0">
        <Hero />
        <Features />
        <FeaturedVehicles />
      </main>
      <MobileWhatsAppBar />
    </>
  );
}