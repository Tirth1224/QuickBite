// import hero from "../assets/image.png";
// import image from "../assets/—Pngtree—hand-painted noise green leaf element_4054582 1.png";
// import cityFoodImage from "../assets/Group 2.png";
// import quote from "../assets/carbon_quotes.png";
// import quotes from "../assets/ph_quotes-fill.png";
// import frame from "../assets/Frame.png";
// import frame1 from "../assets/Frame (1).png";
// import frame2 from "../assets/Frame (2).png";
// const HomePage = () => {
//   return (
//     <div className="flex flex-col gap-12">
//       <div className="max-h-screen bg-white-100 flex items-center justify-center p-6 ">
//         <div className="relative xs:-w-[340px] w-full xs:h-[90vh] sm:h-[65vh] md:h-[70vh] lg:h-[82vh] max-w-screen-xl bg-white rounded-lg shadow-lg shadow-gray-300 overflow-hidden flex flex-col-reverse md:flex-row items-center p-6 md:p-10 -mt-56 md:-mt-56 lg:-mt-64">
//           <div className="z-10 flex-1 text-center md:text-left">
//             <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4 md:mb-6">
//               Order food online from your favourite local restaurants.
//             </h1>
//             <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
//               Freshly made food delivered to your door.
//             </p>
//             <div className="flex flex-col md:flex-row items-center gap-4">
//               <input
//                 type="text"
//                 placeholder="Enter your location"
//                 className="w-60 lg:w-60 md:w-35 sm:w-40 xs:w-72 p-4 border border-green-600 rounded-full focus:outline-none"
//               />
//               <div className="flex gap-4">
//                 <button className="px-6 py-3 lg:w-30 md:w-20 md:py-4 flex justify-center items-center bg-gray-300 text-gray-800 font-semibold rounded-full">
//                   Reset
//                 </button>
//                 <button className="px-6 py-3 lg:w-30 md:w-20 md:py-4 flex justify-center items-center bg-green-600 text-white font-semibold rounded-full">
//                   Search
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="relative w-[300px] h-[300px] xs:w-[150px] xs:h-[150px] sm:w-[175px] sm:h-[175px] md:h-[260px] lg:h-[475px] md:w-[260px] lg:w-[475px] bg-white flex items-center justify-center">
//             <img
//               src={hero}
//               alt="Background"
//               className="absolute inset-0 w-full h-full object-cover z-10"
//             />
//           </div>

//           <div className="absolute inset-0">
//             <img
//               src={image}
//               alt="Background"
//               className=" w-[300px] min-h-[200px] object-cover opacity-30 "
//             />
//           </div>
//           <div className="absolute inset-0">
//             <img
//               src={image}
//               alt="Background"
//               className=" w-[300px] min-h-[200px] object-cover opacity-30 "
//             />
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center justify-center min-h-screen bg-[#FFFFFF] p-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-xl items-center">
//           <div className="text-center md:text-left">
//             <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
//               Explore your favourite city's food.
//             </h1>
//             <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
//               <img src={quote} className="inline-block mr-3 w-6 h-6" />
//               Embark on a culinary journey through your city's finest eateries.
//               Savor the flavors you love, delivered fresh from the kitchen to
//               your doorstep.
//               <img src={quotes} className="inline-block ml-3 w-6 h-6" />
//             </p>
//           </div>

//           <div className="flex justify-center md:justify-end">
//             <img
//               src={cityFoodImage}
//               alt="Delivery Person"
//               className="max-w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>
// <div className="flex items-center justify-center min-h-screen bg-[#FFFFFF] p-6 -mt-28 lg:-mt-32 md:-mt-16 sm:-mt-20 lg:-mb-28 md:-mb-4">
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-screen-xl items-center">
//     <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 h-[550px] sm:h-[500px] xs:h-[500px] md:h-[700px] lg:h-[500px] flex flex-col justify-between overflow-hidden">
//       <img
//         src={frame}
//         alt="Wide selection of restaurants"
//         className="w-15 h-15 mt-8 mb-8  mx-auto"
//       />
//       <div className="flex flex-col items-center px-4 py-2">
//         <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
//           Wide selection of restaurants
//         </h2>
//         <p className="text-gray-600 text-center text-sm md:text-base mb-36">
//           "Explore an extensive range of dining options with our curated
//           list of restaurants. From cozy cafes to fine dining, find the
//           perfect place to satisfy your cravings and enjoy a memorable
//           meal."
//         </p>
//       </div>
//     </div>

//     <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 h-[550px] sm:h-[500px] xs:h-[500px] md:h-[700px] lg:h-[500px] flex flex-col justify-between overflow-hidden">
//       <img
//         src={frame1}
//         alt="Easy ordering process"
//         className="w-15 h-15 mt-8 mb-8 mx-auto"
//       />
//       <div className="flex flex-col items-center px-4 py-2">
//         <h2 className="text-2xl mb-4 font-bold text-green-800 text-center">
//           Easy ordering process
//         </h2>
//         <p className="text-gray-600 text-center text-sm md:text-base mb-36">
//           "Experience a seamless and intuitive ordering process designed
//           for your convenience. With just a few clicks, you can easily
//           select your favorite dishes and have them delivered right to
//           your door."
//         </p>
//       </div>
//     </div>

//     <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 h-[550px] sm:h-[500px] xs:h-[500px] md:h-[700px] lg:h-[500px] flex flex-col justify-between overflow-hidden">
//       <img
//         src={frame2}
//         alt="Fast delivery at your door step"
//         className="w-15 h-15 mt-8 mb-8 mx-auto"
//       />
//       <div className="flex flex-col items-center px-4 py-2">
//         <h2 className="text-2xl mb-4 font-bold text-green-800 text-center">
//           Fast delivery at your door step
//         </h2>
//         <p className="text-gray-600 text-center text-sm md:text-base mb-36">
//           "Enjoy swift and reliable delivery service right to your
//           doorstep. Our team ensures your orders arrive quickly and fresh,
//           so you can savor your meal without any delay."
//         </p>
//       </div>
//     </div>
//   </div>
// </div>

//       <footer className="bg-green-700 text-white py-6 rounded-2xl">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
//           <div
//             className="text-center md:text-left mb-4 md:mb-0 cursor-pointer"
//             onClick={() => (window.location.href = "/")}
//           >
//             <h1 className="text-2xl font-bold mb-2 transition-transform transform duration-300 hover:text-white-100 hover:scale-105">
//               QuickBite.com
//             </h1>
//             <p>&copy; 2024 QuickBite. All rights reserved.</p>
//           </div>

//           <div className="flex flex-col md:flex-row mb-4 md:mb-0">
//             <a
//               href="/"
//               className="px-4 py-2 transition-transform transition-colors transform duration-300 ease-in-out hover:text-white-100 hover:scale-105"
//             >
//               Policy
//             </a>
//             <a
//               href="/about"
//               className="px-4 py-2 transition-transform transition-colors transform duration-300 ease-in-out hover:text-white-100 hover:scale-105"
//             >
//               Terms Of Service
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import hero from "../assets/image.png";
// import image from "../assets/—Pngtree—hand-painted noise green leaf element_4054582 1.png";
// import cityFoodImage from "../assets/Group 2.png";
// import quote from "../assets/carbon_quotes.png";
// import quotes from "../assets/ph_quotes-fill.png";
// import frame from "../assets/Frame.png";
// import frame1 from "../assets/Frame (1).png";
// import frame2 from "../assets/Frame (2).png";

// const HomePage = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, delay: 200, once: true });
//   }, []);

//   return (
//     <div className="flex flex-col gap-12">
//       <div
//         className="max-h-screen bg-white-100 flex items-center justify-center p-1 lg:mt-5 md:mt-0"
//         data-aos="fade-up"
//       >
//         <div
//           className="relative xs:-w-[340px] w-full xs:h-[90vh] sm:h-[65vh] md:h-[70vh] lg:h-[82vh] max-w-screen-xl bg-white rounded-lg shadow-lg shadow-gray-350 overflow-hidden flex flex-col-reverse md:flex-row items-center p-6 md:p-10 -mt-56 md:-mt-56 lg:-mt-64"
//           data-aos="fade-right"
//           data-aos-delay="400"
//         >
//           <div
//             className="z-10 flex-1 text-center md:text-left"
//             data-aos="fade-right"
//             data-aos-delay="600"
//           >
//             <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4 md:mb-6">
//               Order food online from your favourite local restaurants.
//             </h1>
//             <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
//               Freshly made food delivered to your door.
//             </p>
//             <div
//               className="flex flex-col md:flex-row items-center gap-4"
//               data-aos="fade-up"
//               data-aos-delay="800"
//             >
//               <input
//                 type="text"
//                 placeholder="Enter your location"
//                 className="w-60 lg:w-60 md:w-35 sm:w-40 xs:w-72 p-4 border border-green-600 rounded-full focus:outline-none"
//               />
//               <div className="flex gap-4">
//                 <button
//                   className="px-6 py-3 lg:w-30 md:w-20 md:py-4 flex justify-center items-center bg-gray-300 text-gray-800 font-semibold rounded-full"
//                   data-aos="fade-up"
//                   data-aos-delay="1000"
//                 >
//                   Reset
//                 </button>
//                 <button
//                   className="px-6 py-3 lg:w-30 md:w-20 md:py-4 flex justify-center items-center bg-green-600 text-white font-semibold rounded-full"
//                   data-aos="fade-up"
//                   data-aos-delay="1200"
//                 >
//                   Search
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div
//             className="relative w-[300px] h-[300px] xs:w-[150px] xs:h-[150px] sm:w-[175px] sm:h-[175px] md:h-[260px] lg:h-[475px] md:w-[260px] lg:w-[475px] bg-white flex items-center justify-center"
//             data-aos="zoom-in"
//             data-aos-delay="1400"
//           >
//             <img
//               src={hero}
//               alt="Background"
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//           </div>

//           <div
//             className="absolute inset-0"
//             data-aos="fade-up"
//             data-aos-delay="1600"
//           >
//             <img
//               src={image}
//               alt="Background"
//               className="w-[300px] min-h-[200px] object-cover opacity-30"
//             />
//           </div>
//         </div>
//       </div>

//       <div
//         className="flex items-center justify-center min-h-screen bg-[#FFFFFF] p-6"
//         data-aos="fade-up"
//         data-aos-delay="200"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-xl items-center">
//           <div
//             className="text-center md:text-left"
//             data-aos="fade-right"
//             data-aos-delay="400"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
//               Explore your favourite city's food.
//             </h1>
//             <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
//               <img src={quote} className="inline-block mr-3 w-6 h-6" />
//               Embark on a culinary journey through your city's finest eateries.
//               Savor the flavors you love, delivered fresh from the kitchen to
//               your doorstep.
//               <img src={quotes} className="inline-block ml-3 w-6 h-6" />
//             </p>
//           </div>

//           <div
//             className="flex justify-center md:justify-end"
//             data-aos="zoom-in"
//             data-aos-delay="600"
//           >
//             <img
//               src={cityFoodImage}
//               alt="Delivery Person"
//               className="max-w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center justify-center min-h-screen bg-[#FFFFFF] p-6 -mt-28 lg:-mt-32 md:-mt-16 sm:-mt-20 lg:-mb-28 md:-mb-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-screen-xl items-center">
//           <div
//             className="bg-[#F5F5F5] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 h-[550px] sm:h-[500px] xs:h-[500px] md:h-[700px] lg:h-[500px] flex flex-col justify-between overflow-hidden"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <img
//               src={frame}
//               alt="Wide selection of restaurants"
//               className="w-15 h-15 mt-8 mb-8 mx-auto"
//             />
//             <div className="flex flex-col items-center px-4 py-2">
//               <h2 className="text-2xl font-semibold text-green-800 mb-4 text-center">
//                 Wide selection of restaurants
//               </h2>
//               <p className="text-gray-600 text-center text-sm md:text-base mb-36">
//                 "Explore an extensive range of dining options with our curated
//                 list of restaurants. From cozy cafes to fine dining, find the
//                 perfect place to satisfy your cravings and enjoy a memorable
//                 meal."
//               </p>
//             </div>
//           </div>

//           <div
//             className="bg-[#F5F5F5] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 h-[550px] sm:h-[500px] xs:h-[500px] md:h-[700px] lg:h-[500px] flex flex-col justify-between overflow-hidden"
//             data-aos="fade-up"
//             data-aos-delay="400"
//           >
//             <img
//               src={frame1}
//               alt="Easy ordering process"
//               className="w-15 h-15 mt-8 mb-8 mx-auto"
//             />
//             <div className="flex flex-col items-center px-4 py-2">
//               <h2 className="text-2xl mb-4 font-semibold text-green-800 text-center">
//                 Easy ordering process
//               </h2>
//               <p className="text-gray-600 text-center text-sm md:text-base mb-36">
//                 "Experience a seamless and intuitive ordering process designed
//                 for your convenience. With just a few clicks, you can easily
//                 select your favorite dishes and have them delivered right to
//                 your door."
//               </p>
//             </div>
//           </div>

//           <div
//             className="bg-[#F5F5F5] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 h-[550px] sm:h-[500px] xs:h-[500px] md:h-[700px] lg:h-[500px] flex flex-col justify-between overflow-hidden"
//             data-aos="fade-up"
//             data-aos-delay="600"
//           >
//             <img
//               src={frame2}
//               alt="Fast delivery at your door step"
//               className="w-15 h-15 mt-8 mb-8 mx-auto"
//             />
//             <div className="flex flex-col items-center px-4 py-2">
//               <h2 className="text-2xl mb-4 font-semibold text-green-800 text-center">
//                 Fast delivery at your door step
//               </h2>
//               <p className="text-gray-600 text-center text-sm md:text-base mb-36">
//                 "Enjoy swift and reliable delivery service right to your
//                 doorstep. Our team ensures your orders arrive quickly and fresh,
//                 so you can savor your meal without any delay."
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <footer
//         className="bg-green-700 text-white py-6 rounded-2xl"
//         data-aos="fade-up"
//         data-aos-delay="200"
//       >
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
//           <div
//             className="text-center md:text-left mb-4 md:mb-0 cursor-pointer"
//             onClick={() => (window.location.href = "/")}
//             data-aos="fade-up"
//             data-aos-delay="400"
//           >
//             <h1 className="text-2xl font-bold mb-2 transition-transform transform duration-300 hover:text-white-100 hover:scale-105">
//               QuickBite.com
//             </h1>
//             <p>&copy; 2024 QuickBite. All rights reserved.</p>
//           </div>
//           <div className="flex flex-col md:flex-row mb-4 md:mb-0">
//             <a
//               href="/about-us"
//               className="px-4 py-2 transition-transform transition-colors transform duration-300 ease-in-out hover:text-white-100 hover:scale-105"
//               data-aos="fade-up"
//               data-aos-delay="600"
//             >
//               About US
//             </a>
//             <a
//               href="/faqs"
//               className="px-4 py-2 transition-transform transition-colors transform duration-300 ease-in-out hover:text-white-100 hover:scale-105"
//               data-aos="fade-up"
//               data-aos-delay="800"
//             >
//               FAQs
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import hero from "../assets/image.png";
import image from "../assets/—Pngtree—hand-painted noise green leaf element_4054582 1.png";
import cityFoodImage from "../assets/Group 2.png";
import quote from "../assets/carbon_quotes.png";
import quotes from "../assets/ph_quotes-fill.png";
import frame from "../assets/Frame.png";
import frame1 from "../assets/Frame (1).png";
import frame2 from "../assets/Frame (2).png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 200, once: true });
  }, []);

  // const LocationSearch = () => {
  //   const [location, setLocation] = useState("");

  //   const handleInputChange = (e: {
  //     target: { value: SetStateAction<string> };
  //   }) => {
  //     setLocation(e.target.value);
  //   };

  //   const handleReset = () => {
  //     setLocation("");
  //   };

  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      {/* <div
        className="max-h-screen bg-white-100 flex items-center justify-center p-1 lg:mt-5 md:mt-0"
        data-aos="fade-up"
      >
        <div
          className="relative xs:-w-[340px] w-full xs:h-[100vh] sm:h-[65vh] md:h-[70vh] lg:h-[82vh] max-w-screen-xl bg-white rounded-lg shadow-lg shadow-gray-350 overflow-hidden flex flex-col-reverse md:flex-row items-center p-6 md:p-10 -mt-56 md:-mt-56 lg:-mt-64"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <div
            className="z-10 flex-1 text-center md:text-left"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4 md:mb-6">
              Order food online from your favourite local restaurants.
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
              Freshly made food delivered to your door.
            </p>
            <SearchBar
              placeHolder="Search by City or Town"
              onSubmit={handleSearchSubmit}
            />
            
          </div>

          <div
            className="relative w-[300px] h-[300px] xs:w-[150px] xs:h-[150px] sm:w-[175px] sm:h-[175px] md:h-[260px] lg:h-[475px] md:w-[260px] lg:w-[475px] bg-white flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-delay="1400"
          >
            <img
              src={hero}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div
            className="absolute inset-0"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <img
              src={image}
              alt="Background"
              className="w-[300px] min-h-[200px] object-cover opacity-30"
            />
          </div>
        </div>
      </div> */}
      <div
        className="max-h-screen xs:h-[00px] bg-white-100 flex items-center justify-center p-1 lg:mt-5 md:mt-0"
        data-aos="fade-up"
      >
        <div
          className="relative xs:w-full xs:h-[150vh] sm:h-[50vh] md:h-[70vh] lg:h-[82vh] max-w-screen-xl bg-white rounded-lg shadow-lg shadow-gray-350 overflow-hidden flex flex-col-reverse md:flex-row items-center p-6 md:p-10 -mt-56 md:-mt-56 lg:-mt-64"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <div
            className="z-10 flex-1 text-center md:text-left "
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4 md:mb-6 xs:mt-12">
              Order food online from your favourite local restaurants.
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 xs:mt-12 xs:mb-16">
              Freshly made food delivered to your door.
            </p>
            <SearchBar
              placeHolder="Search by City or Town"
              onSubmit={handleSearchSubmit}
            />
          </div>

          <div
            className="relative w-[300px] h-[300px] xs:w-[150px] xs:h-[150px] sm:w-[175px] sm:h-[175px] md:h-[260px] lg:h-[475px] md:w-[260px] lg:w-[475px] bg-white flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-delay="1400"
          >
            <img
              src={hero}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div
            className="absolute inset-0"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <img
              src={image}
              alt="Background"
              className="w-[300px] min-h-[200px] object-cover opacity-30"
            />
          </div>
        </div>
      </div>

      {/* Additional Sections */}

      <div
        className="flex items-center justify-center min-h-screen bg-[#FFFFFF] p-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-xl items-center">
          <div
            className="text-center md:text-left"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Explore your favourite city's food.
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              <img src={quote} className="inline-block mr-3 w-6 h-6" />
              Embark on a culinary journey through your city's finest eateries.
              Savor the flavors you love, delivered fresh from the kitchen to
              your doorstep.
              <img src={quotes} className="inline-block ml-3 w-6 h-6" />
            </p>
          </div>

          <div
            className="flex justify-center md:justify-end"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <img
              src={cityFoodImage}
              alt="Delivery Person"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-[#FFFFFF] p-6 -mt-28 lg:-mt-32 md:-mt-16 sm:-mt-20 lg:-mb-28 md:-mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-screen-xl items-center">
          <div
            className="bg-[#F5F5F5] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 h-[550px] sm:h-[500px] xs:h-[500px] md:h-[700px] lg:h-[500px] flex flex-col justify-between overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src={frame}
              alt="Wide selection of restaurants"
              className="w-15 h-15 mt-8 mb-8 mx-auto"
            />
            <div className="flex flex-col items-center px-4 py-2">
              <h2 className="text-2xl font-semibold text-green-800 mb-4 text-center">
                Wide selection of restaurants
              </h2>
              <p className="text-gray-600 text-center text-sm md:text-base mb-36">
                "Explore an extensive range of dining options with our curated
                list of restaurants. From cozy cafes to fine dining, find the
                perfect place to satisfy your cravings and enjoy a memorable
                meal."
              </p>
            </div>
          </div>

          <div
            className="bg-[#F5F5F5] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 h-[550px] sm:h-[500px] xs:h-[500px] md:h-[700px] lg:h-[500px] flex flex-col justify-between overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src={frame1}
              alt="Easy ordering process"
              className="w-15 h-15 mt-8 mb-8 mx-auto"
            />
            <div className="flex flex-col items-center px-4 py-2">
              <h2 className="text-2xl mb-4 font-semibold text-green-800 text-center">
                Easy ordering process
              </h2>
              <p className="text-gray-600 text-center text-sm md:text-base mb-36">
                "Experience a seamless and intuitive ordering process designed
                for your convenience. With just a few clicks, you can easily
                select your favorite dishes and have them delivered right to
                your door."
              </p>
            </div>
          </div>

          <div
            className="bg-[#F5F5F5] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 h-[550px] sm:h-[500px] xs:h-[500px] md:h-[700px] lg:h-[500px] flex flex-col justify-between overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img
              src={frame2}
              alt="Fast delivery at your door step"
              className="w-15 h-15 mt-8 mb-8 mx-auto"
            />
            <div className="flex flex-col items-center px-4 py-2">
              <h2 className="text-2xl mb-4 font-semibold text-green-800 text-center">
                Fast delivery at your door step
              </h2>
              <p className="text-gray-600 text-center text-sm md:text-base mb-36">
                "Enjoy swift and reliable delivery service right to your
                doorstep. Our team ensures your orders arrive quickly and fresh,
                so you can savor your meal without any delay."
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <footer
        className="bg-green-700 text-white py-6 rounded-2xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div
            className="text-center md:text-left mb-4 md:mb-0 cursor-pointer"
            onClick={() => (window.location.href = "/")}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h1 className="text-2xl font-bold mb-2 transition-transform transform duration-300 hover:text-white-100 hover:scale-105">
              QuickBite.com
            </h1>
            <p>&copy; 2024 QuickBite. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row mb-4 md:mb-0">
            <a
              href="/about-us"
              className="px-4 py-2 transition-transform transform duration-300 ease-in-out hover:text-white-100 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              About Us
            </a>
            <a
              href="/faqs"
              className="px-4 py-2 transition-transform transform duration-300 ease-in-out hover:text-white-100 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              FAQs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

//   return <LocationSearch />;
// };

export default HomePage;
