import Header from '@/components/Header';
import Footer from '@/components/Footer';

const products = [
  {
    title: "Dialogue Analyser",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "Do you have audio recordings or transcripts that need in-depth analysis and reporting? Are you seeking objective feedback on your communication skills when interacting with customers or patients?",
    subDescription: "Let our AI agent, Dialogue Analyser , support you with:",
    features: [
      "Accurate Transcription – Convert speech to text with precision",
      "Conversation Analysis & Coding – Identify key themes, tones, and patterns in dialogue",
      "Competency-Based Reporting – Assess your performance against specific communication competencies",
      "Personalised Feedback – Gain insights into your strengths, dispositions, and areas for improvement"
    ],
    closing: "Enhance your communication strategy with data-driven feedback — tailored to your professional development needs."
  },
  {
    title: "CV Updater",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "In today’s competitive job market, standing out starts with a CV that truly reflects your strengths — especially in relation to the role you’re applying for. The way you present yourself on your cover page and how you tailor your content to align with the Job Description (JD) can make all the difference.",
    subDescription: "Introducing our CV Updater .",
    features: [
        "It is your custom AI agent designed to help you restructure and refine your CV in response to any job posting.",
        "It will highlight your most relevant skills and experiences, so that your CV leaves a lasting impression."
    ],
    closing: "Ready to boost your chances? Upload your CV and let CV Updater work for you!"
  }
];

const Products = () => {
  return (
    <div className="bg-white">
      <Header />
      <main className="bg-brand-secondary">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-2">Learning Products and Tools</h1>
            <p className="text-xl text-brand-text/80">(Featured Learning Agents)</p>
          </div>
          <div className="space-y-16">
            {products.map((product, index) => (
              <article key={product.title} className={`flex flex-col md:flex-row gap-8 lg:gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                  <img src={product.image} alt={product.title} className="rounded-xl shadow-lg w-full h-auto" />
                </div>
                <div className="md:w-1/2 flex flex-col">
                  <h2 className="text-3xl font-bold text-brand-text mb-4">{product.title}</h2>
                  <p className="text-brand-text/90 mb-4">{product.description}</p>
                  <p className="text-brand-text/90 mb-4">{product.subDescription}</p>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <span className="text-brand-primary pt-1 text-2xl leading-none">🧩</span>
                        <span className="text-brand-text/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-brand-text/90 mt-auto">{product.closing}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
