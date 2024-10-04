import Logo from '../images/Logo.webp'
const Header = () => {
  return (
    <header className=" bg-[--tur1]  dark:bg-[--tur4] py-10">
      <div className=" items-center justify-center">
        <div>
            <div className='flex items-center justify-center'>
                <img src={Logo} alt="Quick Currency Calc Logo" className="md:h-12 md:w-12 h-8 w-8 mr-3 rounded-full" />
                <h2 className="text-white md:text-2xl text-lg font-bold">Quick Currency Calc</h2>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


