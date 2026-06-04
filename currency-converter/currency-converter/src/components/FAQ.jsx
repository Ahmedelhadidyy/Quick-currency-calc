import { useState } from 'react';
import PropTypes from 'prop-types';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 "  id='faq'>
      <button
        className="w-full text-left p-4 sm-font-semibold text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 focus:outline-none"
        onClick={toggleOpen}
      >
        {question}
        <span className={`ml-2 transform ease-in-out  ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <p className="p-4 text-gray-600 dark:text-gray-300">
          {answer}
        </p>
      </div>
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

const FAQSection = () => {
  const faqData = [
    { question: "What is a currency converter?", answer: "A currency converter allows you to calculate exchange rates between different currencies." },
    { question: "How do exchange rates work?", answer: "Exchange rates show how much of one currency is needed to buy another currency." },
    { question: "How often are the rates updated?", answer: "The rates are updated every minute to reflect the latest market conditions." },
    { question: "What is a currency exchange rate?", answer: "A currency exchange rate is the value of one currency when compared to another." },
    { question: "How often are the exchange rates updated?", answer: "Exchange rates are typically updated in real-time or at set intervals based on market fluctuations." },
    { question: "What should I do if the exchange rate data seems outdated?", answer: "Try refreshing the page or checking back later as rates are updated periodically." }
  ];

  return (
    <div className="md:w-[40rem] lg:w-[50rem] sm:w-[25rem] text-xs sm:text-sm md:text-[1rem] lg:text-lg mx-auto my-40 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-lg">
      <div className='flex items-cener justify-center'>
        <h1 className=" text-[1.1rem] md:text-3xl mb-8 font-bold my-6">Frequently Asked Questions</h1>
      </div>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQSection;
