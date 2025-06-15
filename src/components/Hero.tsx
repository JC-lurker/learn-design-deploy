
const Hero = () => {
  return (
    <section className="bg-brand-primary text-white overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 md:py-24 px-4 md:px-8 lg:px-16 relative">
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Transform Learning through Innovation and Expertise
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            We design, develop, and deliver workshops and learning solutions that drive results for individuals and organizations.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end z-10">
           <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756ded668?q=80&w=1470&auto=format&fit=crop"
            alt="Happy student" 
            className="rounded-full object-cover h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 border-8 border-white/20"
          />
        </div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full" />
        <div className="absolute top-10 -right-20 w-60 h-60 bg-white/10 rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
