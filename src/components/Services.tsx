
import { SquareCheckBig } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: "Training Programs",
    image: "/lovable-uploads/ab6d3296-9ef8-430c-8815-cd5990a018c9.png",
    descriptionBefore: 'Empower your team with our “Build Your Training Program” initiative — a flexible, customisable solution designed to fit your schedule, goals, and budget. We help you:',
    points: [
      "Create a tailored learning journey aligned with your organisational needs.",
      "Use the SkillsFuture Framework to ensure clarity, relevance, and measurable outcomes.",
      "Enhance your training experience with AI-powered learning reports, offering real-time insights into progress, engagement, and performance.",
    ],
    descriptionAfter: "Discover how adaptive, data-driven learning can transform your workforce. Contact us to learn more about this initiative and how we can support your goals."
  },
  {
    title: "Expert Learning Design",
    image: "/lovable-uploads/4cd14d5f-6d02-4e9c-8e0e-dc2a72c1b490.png",
    descriptionBefore: "Our team brings deep expertise in learning design grounded in both academic excellence and professional certification. We hold:",
    points: [
      "A Master's degree in Instructional Design and Technology.",
      "An average work experience of at least 5 years in the industry.",
    ],
    descriptionAfter: "You can trust that you're working with top-tier learning designers in Singapore. Choose from a range of design outputs, and enhance your program with optional cutting-edge features such as AI-powered smart content and AI-driven learning activities. Contact us today for a personalized quote and take the first step toward impactful, future-ready learning experiences."
  },
  {
    title: "AI Agents and Analytics",
    image: "/lovable-uploads/ac96e867-d8cc-4e0a-b752-b234a54da251.png",
    descriptionBefore: "Our AI agents that do more than just streamline tasks.",
    points: [
      "Be empowered with Ai speed and automation.",
      "Improve accuracy with AI agents.",
      "Partner with an AI coach to think deeper, and perform at your best.",
    ],
    descriptionAfter: "Whether you're looking for ready-to-use analytics tools, customizable options tailored to your unique workflow, or fully bespoke solutions, we’ve got you covered. Ready to unlock your potential?",
    links: [
        { text: "Start HERE to view the Standard tools", href: "#" },
        { text: "Arrange for a email quote", href: "#" }
    ]
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" ref={ref} className="bg-brand-secondary py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold text-brand-text mb-4 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>Our Learning Services</h2>
        <p className={`text-lg text-brand-text/80 max-w-3xl mx-auto mb-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          Comprehensive Learning solutions designed to meet your unique needs and drive measurable outcomes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className={`bg-white rounded-xl shadow-lg p-6 text-left flex flex-col ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${0.4 + index * 0.15}s` }}>
              <img src={service.image} alt={service.title} className="rounded-lg h-48 w-full object-cover mb-6" />
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-brand-text mb-4">{service.title}</h3>
                
                {service.descriptionBefore && <p className="text-brand-text/90 mb-4">{service.descriptionBefore}</p>}
                
                <ul className="space-y-3 mb-4">
                  {service.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <SquareCheckBig className="text-brand-primary w-5 h-5 mt-1 flex-shrink-0" />
                      <span className="text-brand-text/90">{point}</span>
                    </li>
                  ))}
                </ul>
                
                {service.descriptionAfter && <p className="text-brand-text/90 mb-4">{service.descriptionAfter}</p>}

                <div className="mt-auto">
                  {service.links && (
                    <div className="pt-4">
                        {service.links.map((link, index) => (
                            <a key={index} href={link.href} className="text-brand-primary font-bold hover:underline block mb-2">{link.text}</a>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
