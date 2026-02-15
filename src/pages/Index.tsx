import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import GrandmaWisdomPreview from "@/components/home/GrandmaWisdomPreview";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import ChatbotWidget from "@/components/chat/ChatbotWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <GrandmaWisdomPreview />
      <CTA />
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Index;
