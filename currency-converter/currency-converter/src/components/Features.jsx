const Features = () => {
    const features = [
      "Real-time exchange rates",
      "Interactive charts and graphs",
      "Currency converter"
    ];
  
    return (
      <div className="max-w-xl mx-auto p-4 mt-8" id="features">
        <h1 className="text-[1.1rem] sm:text-3xl font-bold mb-4 text-center">Features</h1>
        <ul className="list-disc list-inside text-xs sm:text-lg dark:text-[--void2] text-gray-700">
          {features.map((feature, index) => (
            <li key={index} className="mb-2">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Features;
  