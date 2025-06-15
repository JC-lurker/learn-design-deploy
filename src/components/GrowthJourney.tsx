
import { PlayCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const GrowthJourney = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold text-brand-text mb-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>Empower Your Growth Journey</h2>
        <div className={`relative aspect-video bg-gray-200 rounded-xl flex items-center justify-center max-w-4xl mx-auto mb-8 shadow-lg ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop" alt="Growth Journey" className="absolute inset-0 w-full h-full object-cover rounded-xl" />
          <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
          <PlayCircle className="text-white h-20 w-20 z-10 cursor-pointer hover:scale-110 transition-transform" />
        </div>
        <p className={`text-lg text-brand-text/80 max-w-3xl mx-auto ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          Discover how Learning Legacy crafts tailored workshops and learning solutions to elevate individuals and organizations. Our expert-designed programs deliver measurable outcomes that drive success. Join us to transform your potential into performance.
        </p>
      </div>
    </section>
  );
};

export default GrowthJourney;
