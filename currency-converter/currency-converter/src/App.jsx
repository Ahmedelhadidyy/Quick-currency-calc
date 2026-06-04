import { useState, useEffect } from "react";
import axios from "axios";
import CurrencySelector from "./components/CurrencySelector";
import AmountInput from './components/AmountInput';
import ConversionResult from './components/ConversionResult';
import useDarkMode from './components/useDarkMode';
import LiveExchangeRates from "./components/LiveExchangeRates";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import CurrencyLineChart from "./components/CurrencyLineChart";
import Features from "./components/Features";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";




const API_KEY = '573dd568cdff91d16f73d106';  


const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [rate, setRate] = useState(null);


  useEffect(() => {axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`)
        .then(response => {
          setCurrencies(Object.keys(response.data.conversion_rates));
        })
        .catch(error => {
          console.error('Error fetching currencies:', error);
        });
    }, []);

    useEffect(() => {
    if (fromCurrency && toCurrency && amount) {
      axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`)
        .then(response => {
          const conversionRate = response.data.conversion_rates[toCurrency];
          setRate(conversionRate);
          setConvertedAmount((conversionRate * amount).toFixed(2));
        })
        .catch(error => {
          console.error('Error fetching conversion rate:', error);
        });
    }
  }, [fromCurrency, toCurrency, amount]);
    const [isDarkMode, setIsDarkMode] = useDarkMode();


  return (
    <div className="w-full m-0 bg-white  dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg">
      <Header/>
      <div className='md:grid md:grid-cols-3 flex justify-start flex-col-reverse gap-8 text-center text-sm md:text-[1rem] lg:text-lg mt-10 items-center md:justify-between' >
        <div className='flex flex-col md:flex-row gap-8 w-48 md:w-auto col-span-2 justify-evenly '>
              <a href="#exchange-rates" className="bg-[--tur2] dark:bg-[--tur4] p-2 rounded-3xl font-bold hover:opacity-80"><button>Exchange Rates</button></a>
              <a href="#aboutus" className="bg-[--tur2] dark:bg-[--tur4] p-2 rounded-3xl font-bold hover:opacity-80"><button>About Us</button></a>
              <a href="#faq" className="bg-[--tur2] dark:bg-[--tur4] p-2 rounded-3xl font-bold hover:opacity-80"><button>FAQ</button></a>
              <a href="#features" className="bg-[--tur2] dark:bg-[--tur4] p-2 rounded-3xl font-bold hover:opacity-80"><button>Features</button></a>
        </div>
        <div className="flex items-center justify-center">
          <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="py-2 font-bold w-48 text-center rounded-2xl bg-gray-500 hover:opacity-80 dark:bg-gray-700 dark:text-white"
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        </div>
        
      </div>
      <div className="w-[100%] flex items-center justify-center mt-20">
        <div className="w-[70%]">
        <CurrencySelector
          label="From Currency"
          currencies={currencies}
          selectedCurrency={fromCurrency}
          onSelectCurrency={setFromCurrency}
        />

        <CurrencySelector
          label="To Currency"
          currencies={currencies}
          selectedCurrency={toCurrency}
          onSelectCurrency={setToCurrency}
        />

        <AmountInput amount={amount} setAmount={setAmount} />


        <ConversionResult
          convertedAmount={convertedAmount}
          rate={rate}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
        />

      </div>
      </div>
      

      <ScrollToTop />

      <div className="flex items-center justify-center flex-col mt-20">
         <h1 className="text-[1.1rem] sm:text-3xl font-bold">Currency Exchange Rates</h1>
         <div className="my-40 w-[80%] items-center justify-center">
          
           <CurrencyLineChart />
         </div>
         <LiveExchangeRates />
      </div>
      <AboutUs />
      <FAQ />
      <Features />
      <Footer />
    </div>
  )
}

export default App



