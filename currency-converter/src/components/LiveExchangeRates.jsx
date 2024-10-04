import { useState, useEffect } from 'react';

const API_KEY = '7e24ab5222ddba3b342b6695'; 

const LiveExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`);
      const data = await response.json();
      setRates(data.conversion_rates);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching live exchange rates:', error);
    }
  };

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  if (loading) {
    return <div>Loading live exchange rates...</div>;
  }

  return (
    <div className="live-exchange-rates-dropdown w-[18rem] sm:w-[24rem] md:w-[40rem] mx-auto">
      <div
        className="dropdown-header bg-[--tur1] rounded-sm text-white p-4 cursor-pointer flex justify-between items-center dark:bg-[--tur4]"
        onClick={toggleExpanded}
      >
        <h2 className="text-xs md:text-xl font-bold">Live Exchange Rates</h2>
        <span className='text-xs md:text-xl'>{expanded ? '▲' : '▼'}</span>
      </div>

      <div
        className={`dropdown-content transition-all duration-700 overflow-hidden ${
          expanded ? 'max-h-[1000px]' : 'max-h-0'
        }`}
      >
        <div className="p-4 border border-t-0 border-[--tur1] dark:border-[--tur4] bg-white overflow-y-auto h-[600px] dark:bg-[--void4]">
          <table className="min-w-full bg-white dark:bg-[--void4]">
            <thead>
              <tr>
                <th className="py-2 px-4 text-[.6rem] md:text-lg lg:text-xl text-left">Currency</th>
                <th className="py-2 px-4 text-[.6rem] md:text-lg lg:text-xl text-right">Rate (vs. USD)</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(rates).map(([currency, rate]) => (
                <tr key={currency}>
                  <td className="border-t text-[.6rem] md:text-lg lg:text-xl py-2 px-4">{currency}</td>
                  <td className="border-t text-[.6rem] md:text-lg lg:text-xl py-2 px-4 text-right">{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LiveExchangeRates;


