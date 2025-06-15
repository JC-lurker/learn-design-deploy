
const Hero = () => {
  return <section className="bg-hero-gradient text-white overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between md:py-8 px-4 md:px-8 lg:px-16 relative py-[32px]">
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug mb-4">
            Transform Learning through Innovation and Expertise
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            We design, develop, and deliver workshops and learning solutions that drive results for individuals and organizations.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end z-10">
           <img src="/lovable-uploads/3781fa76-26cd-4682-84b2-547687eeec88.png" alt="Happy student" className="h-[26rem] md:h-[32.5rem] lg:h-[39rem] w-auto" />
        </div>
        <img
            src="/lovable-uploads/e697840d-3f4b-42af-97c8-08521a1cd266.png"
            alt="Decorative element"
            className="absolute bottom-0 left-0 w-full md:w-2/3 z-0"
        />
      </div>
    </section>;
};
export default Hero;
