import PropTypes from 'prop-types';

const ConversionResult = ({ convertedAmount, rate, fromCurrency, toCurrency }) => {
  return (
    <div className="mt-6 text-center" id='exchange-rates'>
      {convertedAmount ? (
        <>
          <h2 className="text-sm sm:text-2xl dark:text-[--tur3] font-semibold">Converted Amount: {convertedAmount} {toCurrency}</h2>
          {rate && <p className='text-[.6rem] sm:text-xl'>Exchange Rate: 1 {fromCurrency} = {rate.toFixed(4)} {toCurrency}</p>}
        </>
      ) : (
        <p>Please select currencies and enter an amount to convert.</p>
      )}
    </div>
  );
};

ConversionResult.propTypes = {
  convertedAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  rate: PropTypes.number,
  fromCurrency: PropTypes.string.isRequired,
  toCurrency: PropTypes.string.isRequired,
};

export default ConversionResult;
