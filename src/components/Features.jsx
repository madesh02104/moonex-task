import { FaDollarSign, FaShieldAlt, FaGift, FaUserCheck } from 'react-icons/fa';
const Features = () => {
  const features = [
    {
      icon: FaDollarSign,
      title: 'Cheapest Txs',
      description: 'Exchange popular digital tokens at the best prices.'
    },
    {
      icon: FaShieldAlt,
      title: 'CertiK Audit',
      description: 'We are audited by CertiK, ensuring the safety of your funds.'
    },
    {
      icon: FaGift,
      title: 'No Contract Fees',
      description: 'No hidden fees or contract calls to drain your balance.'
    },
    {
      icon: FaUserCheck,
      title: 'CrossChain Support',
      description: 'Seamlessly transact across multiple blockchains.'
    }
  ];

  return (
    <section className="bg-[url('bg-gradient-img.png')] py-16 md:py-24 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-neue-machina text-secondary font-bold mb-8 text-center">
        Our <span className='text-primary'>Features</span> 
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-background rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <feature.icon className="text-primary h-12 w-12 mb-4" />
            <h3 className="text-secondary font-bold text-xl mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;