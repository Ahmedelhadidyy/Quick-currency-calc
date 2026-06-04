import PropTypes from 'prop-types';

const AmountInput = ({ amount, setAmount }) => {
  return (
    <div className="mb-4">
      <label className="block text-[.9rem] sm:text-lg mb-2">Amount</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border border-gray-500 text-[.8rem] sm:text-lg p-2 dark:bg-[--void4] rounded w-full"
      />
    </div>
  );
};

AmountInput.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setAmount: PropTypes.func.isRequired,
};

export default AmountInput;

