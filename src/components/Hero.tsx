
const Hero = () => {
  return (
    <section className="bg-hero-gradient text-white overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between md:py-8 px-4 md:px-8 lg:px-16 relative py-[32px]">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug mb-4 max-w-xl">
            Transform Learning through Innovation and Expertise
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
            We design, develop, and deliver workshops and learning solutions that drive results for individuals and organizations.
          </p>
          <img
            src="/lovable-uploads/e697840d-3f4b-42af-97c8-08521a1cd266.png"
            alt="Decorative element"
            className="w-1/2 md:w-1/3 mx-auto md:mx-0"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end relative">
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/3 w-[40rem] h-[40rem] bg-[#c5577b] rounded-full" />
          <img
            src="/lovable-uploads/3781fa76-26cd-4682-84b2-547687eeec88.png"
            alt="Happy student"
            className="relative h-[26rem] md:h-[32.5rem] lg:h-[39rem] w-auto"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
