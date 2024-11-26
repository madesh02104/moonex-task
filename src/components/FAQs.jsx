import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const faqs = [
    {
      question: 'How do I get a Referral Code?',
      answer:
        'To get a referral code, simply create an account on our platform. Once youve completed the registration process, you can find your unique referral code in your account dashboard.'
    },
    {
      question: 'Do I get rewarded in tokens when I refer friends?',
      answer:
        'Yes, when your friends use your referral code to sign up and trade on our platform, you will receive a percentage of their trading fees as a reward in our native token.'
    },
    {
      question: 'How long does it take to get my referral rewards?',
      answer:
        'Referral rewards are typically credited to your account within 24-48 hours after your referred friend completes their first trade.'
    },
    {
      question: 'Is there a limit to how much I can earn from referrals?',
      answer:
        'There is no limit to the amount you can earn from referrals. The more friends you refer, the more you can potentially earn in rewards.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="bg-[url('bg-gradient-img.png')] py-16 md:py-24 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-neue-machina text-secondary font-bold mb-8 text-center">
        FAQs
      </h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-background rounded-xl overflow-hidden border border-accent mb-4"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-accent hover:bg-opacity-20 transition-colors duration-300"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-secondary font-medium">{faq.question}</span>
              {activeIndex === index ? (
                <ChevronUpIcon className="text-primary h-6 w-6" />
              ) : (
                <ChevronDownIcon className="text-primary h-6 w-6" />
              )}
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-accent">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;