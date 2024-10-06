import React, { useState, useEffect } from "react";
import food from "@/assets/pexels-photo-1640774.jpeg";
import frame1 from "@/assets/message-online-chat-social-text-concept.jpg";
import frame2 from "@/assets/frequently-asked-questions-solution-concept.jpg";
import frame3 from "@/assets/people-working-call-center.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS

const FaqsPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: true, // Animate only once when scrolling down
    });
  }, []);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "ca1bfe38-5926-419d-8ff5-1e98a433cb52");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    setLoading(false);

    if (res.success) {
      toast.success("Email sent successfully!");
    } else {
      toast.error("Failed to send email. Please try again.");
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-64" data-aos="fade-up">
        <img
          src={food}
          alt="Food Background"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-green-700 text-center text-4xl font-semibold">
            Need Assistance? We’ve Got You Covered!
          </h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12" data-aos="fade-up">
        <h2 className="text-center text-3xl font-semibold mb-8 text-green-700">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Service Card 1 */}
          <div
            className="relative bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => scrollToSection("contact")}
          >
            <div className="w-full h-80 rounded-2xl overflow-hidden">
              <img
                src={frame1}
                alt="Service 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gray-50 opacity-60 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-green-900 text-2xl font-semibold text-center">
                24/7 Customer Support
              </h3>
            </div>
          </div>
          {/* Service Card 2 */}
          <div
            className="relative bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => scrollToSection("faqs")}
          >
            <div className="w-full h-80 rounded-2xl overflow-hidden">
              <img
                src={frame2}
                alt="Service 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gray-50 opacity-60 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-green-900 text-2xl text-center font-semibold">
                FAQs and Guide
              </h3>
            </div>
          </div>
          {/* Service Card 3 */}
          <div
            className="relative bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => scrollToSection("contact")}
          >
            <div className="w-full h-80 rounded-2xl overflow-hidden">
              <img
                src={frame3}
                alt="Service 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gray-50 opacity-60 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-green-900 text-2xl text-center font-semibold">
                Email Support
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 bg-white" data-aos="fade-up" id="faqs">
        <h2 className="text-center text-3xl font-semibold mb-8 text-green-700">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto">
          {/* Question 1 */}
          <div className="mb-4 border-b">
            <button
              className="w-full text-left text-lg font-semibold text-gray-800 py-2 flex justify-between items-center focus:outline-none"
              onClick={() => toggleDropdown(1)}
            >
              <span>How can I place an order?</span>
              <IoIosArrowDown
                className={`text-green-700 transition-transform duration-300 ${
                  openDropdown === 1 ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openDropdown === 1 ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 mt-2">
                You can place an order through our website or mobile app in a
                few easy steps. Select your favorite dishes, add them to the
                cart, and proceed with checkout.
              </p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="mb-4 border-b">
            <button
              className="w-full text-left text-lg font-semibold text-gray-800 py-2 flex justify-between items-center focus:outline-none"
              onClick={() => toggleDropdown(2)}
            >
              <span>Do you offer contactless delivery?</span>
              <IoIosArrowDown
                className={`text-green-700 transition-transform duration-300 ${
                  openDropdown === 2 ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openDropdown === 2 ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 mt-2">
                Yes, we offer contactless delivery for your safety and
                convenience. Simply choose this option during checkout.
              </p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="mb-4 border-b">
            <button
              className="w-full text-left text-lg font-semibold text-gray-800 py-2 flex justify-between items-center focus:outline-none"
              onClick={() => toggleDropdown(3)}
            >
              <span>What payment methods do you accept?</span>
              <IoIosArrowDown
                className={`text-green-700 transition-transform duration-300 ${
                  openDropdown === 3 ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openDropdown === 3 ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 mt-2">
                We accept various payment methods including credit/debit cards,
                digital wallets, and cash on delivery.
              </p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="mb-4 border-b">
            <button
              className="w-full text-left text-lg font-semibold text-gray-800 py-2 flex justify-between items-center focus:outline-none"
              onClick={() => toggleDropdown(4)}
            >
              <span>Can I modify my order after placing it?</span>
              <IoIosArrowDown
                className={`text-green-700 transition-transform duration-300 ${
                  openDropdown === 4 ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openDropdown === 4 ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 mt-2">
                Yes, you can modify your order within a certain timeframe before
                it is processed. Please contact our customer service for
                assistance.
              </p>
            </div>
          </div>

          {/* Question 5 */}
          <div className="mb-4 border-b">
            <button
              className="w-full text-left text-lg font-semibold text-gray-800 py-2 flex justify-between items-center focus:outline-none"
              onClick={() => toggleDropdown(5)}
            >
              <span>What should I do if I receive a wrong order?</span>
              <IoIosArrowDown
                className={`text-green-700 transition-transform duration-300 ${
                  openDropdown === 5 ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openDropdown === 5 ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 mt-2">
                If you receive a wrong order, please contact our support team
                immediately, and we will resolve the issue as quickly as
                possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        className="py-12 bg-white text-green-700"
        id="contact"
        data-aos="fade-up"
      >
        <div className="container px-2 px-lg-4 pb-4 pt-5 mb-5">
          <div className="text-center mb-5">
            <h2 className="text-center text-3xl font-semibold mb-8 text-green-700">
              Contact Us
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2 mb-4">
              <div className="bg-light p-6 rounded shadow-lg">
                <form className="space-y-4" onSubmit={onSubmit}>
                  <div className="flex flex-col">
                    <label className="mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="p-3 rounded-md border border-green-700 text-green-700"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="p-3 rounded-md border border-green-700 text-green-700"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="p-3 rounded-md border border-green-700 text-green-700"
                      placeholder="Write your message here"
                      rows={4}
                      required
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </Button>
                </form>
              </div>
            </div>
            {/* Right side content remains unchanged... */}
            <div className="md:w-1/2 pl-4">
              <h3 className="text-lg font-semibold mb-2">Get in Touch!</h3>
              <p>
                Got a question or need assistance? Use the form below to reach
                out, and our team will get back to you as quickly as possible.
                Whether it's a query about your order or general information,
                we're here to help make your QuickBite experience smooth and
                satisfying. Don't hesitate—drop us a message today!
              </p>
              <p className="mt-5 mb-2">
                <strong>Email:</strong> quickbite2402@gmail.com
              </p>
              <p>
                <strong>Location:</strong> UVPCE, Ganpat University
              </p>
              {/* <p className="mt-2 mb-2">
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/tirth-patel-b90b1622a/"
                  className="text-green-700 no-underline"
                >
                  Tirth Patel
                </a>
              </p> */}
              <p className="mt-2 mb-2">
                <strong>Designed By:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/shreya-patel24/"
                  className="text-green-700 no-underline"
                >
                  Shreya Patel
                </a>
              </p>
              <p className="mt-2 mb-2">
                <strong>Developed By:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/tirth-patel-b90b1622a/"
                  className="text-green-700 no-underline"
                >
                  Tirth Patel
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer
        className="bg-green-700 text-white py-6 rounded-2xl mb-4 -mt-14"
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

export default FaqsPage;
