import Header from "./Header";
const Footer = () => {
  return (
    <footer className="bg-[--tur1] dark:bg-[--tur4] text-xs sm:text-sm text-white p-4 mt-8">
      <Header />
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Quick Currency Calc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
