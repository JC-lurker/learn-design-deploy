
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import GrowthJourney from '@/components/GrowthJourney';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <GrowthJourney />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
