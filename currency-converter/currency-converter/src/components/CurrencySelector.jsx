import { useState } from 'react';
import PropTypes from 'prop-types';

const CurrencySelector = ({ label, currencies, selectedCurrency, onSelectCurrency }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCurrencies = currencies.filter(currency =>
    currency.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mb-4">
      <label className="block text-[.9rem] sm:text-lg mb-2">{label}</label>
      <input
        type="text"
        placeholder="Search currency..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border dark:bg-[--void4] text-[.9rem] sm:text-lg p-2 rounded w-full mb-2"
      />
      <ul className="list-none max-h-32 overflow-y-auto border rounded">
        {filteredCurrencies.map(currency => (
          <li
            key={currency}
            onClick={() => onSelectCurrency(currency)}
            className={`cursor-pointer p-2 hover:bg-gray-300 text-[.8rem] sm:text-lg dark:hover:bg-gray-900 rounded ${selectedCurrency === currency ? 'bg-[--tur1] dark:bg-[--tur4]' : ''}`}
          >
            {currency}
          </li>
        ))}
      </ul>
    </div>
  );
};

CurrencySelector.propTypes = {
  label: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  onSelectCurrency: PropTypes.func.isRequired,
};

export default CurrencySelector;

