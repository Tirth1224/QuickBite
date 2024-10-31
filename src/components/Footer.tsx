const Footer = () => {
  return (
    <footer
      className="bg-green-700 text-white py-6 mt-10 rounded-2xl"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div
          className="text-center md:text-left mb-4 md:mb-0 cursor-pointer"
          onClick={() => (window.location.href = "/")}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h1 className="text-2xl font-bold mb-2 transition-transform transform duration-300 hover:text-white-100 hover:scale-105">
            QuickBite.com
          </h1>
          <p>&copy; 2024 QuickBite. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row mb-4 md:mb-0">
          <a
            href="/about-us"
            className="px-4 py-2 transition-transform transition-colors transform duration-300 ease-in-out hover:text-white-100 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            About US
          </a>
          <a
            href="/faqs"
            className="px-4 py-2 transition-transform transition-colors transform duration-300 ease-in-out hover:text-white-100 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            FAQs
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
