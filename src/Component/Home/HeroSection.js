const HeroSection = () => {
    return (
      <section className="relative">
        <img src="https://placehold.co/1920x800" alt="Modern kitchen design" className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl font-bold">Design Your Kitchen with the Experts</h1>
          <button className="mt-4 bg-yellow-500 text-gray-900 px-6 py-3 rounded">Learn More</button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  