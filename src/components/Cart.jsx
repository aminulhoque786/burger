import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Container from "./Container";
import jhaki from "../assets/jhaki.avif";
import tuki from "../assets/tuki.avif";
import fuki from "../assets/fuki.avif";

const Cart = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", delay: 200 });
  }, []);

  return (
    <div className="pt-10">
      <Container>
        <div className="flex flex-col md:flex-row gap-5">
          {/* Card 1 */}
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg"
            data-aos="slide-up"
            data-aos-delay="200"
          >
            <img
              className="transition-transform duration-300 transform hover:scale-110 w-full h-[200px]"
              src={jhaki}
              alt="The Crispy Burger"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Crispy Burger</div>
              <p className="text-blue-400 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="pl-10">
              <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg"
            data-aos="slide-up"
            data-aos-delay="400"
          >
            <img
              className="transition-transform duration-300 transform hover:scale-110 w-full h-[200px]"
              src={tuki}
              alt="The Ginger Hotdog"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Ginger Hotdog</div>
              <p className="text-blue-400 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="pl-10">
              <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg"
            data-aos="slide-up"
            data-aos-delay="600"
          >
            <img
              className="transition-transform duration-300 transform hover:scale-110 w-full h-[200px]"
              src={fuki}
              alt="The Crispy Burger"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Crispy Burger</div>
              <p className="text-blue-400 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="pl-10">
              <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
