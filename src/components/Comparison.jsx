import { CheckIcon, XIcon } from 'lucide-react';

const Comparison = () => {
  const comparison = [
    { feature: 'Point-to-one swap', moonex: true, uniswap: false },
    { feature: 'Point-to-multi swap', moonex: true, uniswap: true },
    { feature: 'No Gas Fees', moonex: true, uniswap: false },
    { feature: 'Cross-chain Transactions', moonex: true, uniswap: false },
    { feature: 'Lowest Slippage', moonex: true, uniswap: false },
    { feature: 'Highest Liquidity', moonex: true, uniswap: false },
  ];

  return (
    <section className="font-raleway  py-16 md:py-24 px-6 md:px-12 bg-[url('../assets/star-img.png')] bg-no-repeat bg-right-top">
      <h2 className="font-raleway text-3xl md:text-4xl text-secondary font-bold mb-8 text-center">
        Why <span className='text-primary font-semibold'>MoonEX?</span> 
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-3xl font-bold py-4 px-6 text-left text-primary rounded-tl-lg">
                Comparison
              </th>
              <th className="text-3xl font-bold py-4 px-6 text-center ">
                MoonEX
              </th>
              <th className="text-3xl font-bold py-4 px-6 text-center  rounded-tr-lg">
                Uniswap
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row, index) => (
              <tr
                key={index}
                className={`border-b border-accent ${
                  index % 2 === 0 ? 'bg-background' : 'bg-tertiary'
                }`}
              >
                <td className="py-4 px-6 text-secondary ">{row.feature}</td>
                <td className="py-4 px-6 text-center">
                  {row.moonex ? (
                    <CheckIcon className="inline-block text-green-500 h-8 w-8" />
                  ) : (
                    <XIcon className="inline-block text-red-500 h-8 w-8" />
                  )}
                </td>
                <td className="py-4 px-6 text-center">
                  {row.uniswap ? (
                    <CheckIcon className="inline-block text-green-500 h-8 w-8" />
                  ) : (
                    <XIcon className="inline-block text-red-500 h-8 w-8" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Comparison;