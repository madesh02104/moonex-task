import heroBall from "../assets/bg-gradient-img-1.png";

const Hero = () => {
  return (
    <section className="w-full py-20 md:py-32 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-neue-machina texbetweent-secondary font-bold mb-4">
          Trusted Multi-Chain
        </h1>
        <h1 className="text-4xl md:text-6xl font-neue-machina text-secondary font-bold mb-6">
          <span className="text-primary">DEX</span> Platform
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-8">
          Trade, swap, and earn on the all-in-one multi-chain DEX.
        </p>
        <div className="flex flex-col gap-4 justify-center items-center sm:flex-row sm:justify-start">
          <button className="bg-primary text-tertiary px-8 py-3 w-48 rounded-full hover:bg-opacity-80 transition-colors duration-300">
            Connect Wallet
          </button>
          <button className="bg-tertiary text-primary border border-primary px-8 py-3 w-48  rounded-full hover:bg-gray-800 transition-colors duration-300">
            Trade Crypto
          </button>
        </div>
      </div>
      <div className="absolute ml-96 pl-48 mt-24 w-full md:w-1/2">
        <img src={heroBall} alt="Hero Moon" className="max-w-full h-auto object-contain" />
      </div>
    </section>
  );
};

export default Hero;
