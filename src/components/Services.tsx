
import { SquareCheckBig } from 'lucide-react';

const services = [
  {
    title: "AI Agility Training Programs",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop",
    points: [
      "Create a tailored learning journey aligned with your organisational needs.",
      "Use the SkillsFuture Framework to ensure clarity, relevance, and measurable outcomes.",
      "Enhance your training experience with AI-powered learning reports.",
    ],
  },
  {
    title: "Expert Learning Design",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop",
    points: [
      "A Master's degree in Instructional Design and Technology.",
      "An average work experience of at least 5 years in the industry.",
      "Trust that you're working with top-tier learning designers in Singapore.",
    ],
  },
  {
    title: "AI Agents and Analytics",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1470&auto=format&fit=crop",
    points: [
      "Be empowered with AI speed and automation.",
      "Improve accuracy with AI agents.",
      "Partner with an AI coach to think deeper, and perform at your best.",
    ],
  },
];

const Services = () => {
  return (
    <section className="bg-brand-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Our Learning Services</h2>
        <p className="text-lg text-brand-text/80 max-w-3xl mx-auto mb-12">
          Comprehensive Learning solutions designed to meet your unique needs and drive measurable outcomes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-xl shadow-lg p-6 text-left flex flex-col">
              <img src={service.image} alt={service.title} className="rounded-lg h-48 w-full object-cover mb-6" />
              <h3 className="text-xl font-bold text-brand-text mb-4">{service.title}</h3>
              <ul className="space-y-3 flex-grow">
                {service.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <SquareCheckBig className="text-brand-primary w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-brand-text/90">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
