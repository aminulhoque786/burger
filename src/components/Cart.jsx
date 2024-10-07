import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Container from "./Container";
import jhaki from "../assets/jhaki.avif";
import tuki from "../assets/tuki.avif";
import fuki from "../assets/fuki.avif";
const Cart = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", delay: 700 }); // Animation timing and delay
  }, []);
  return (
    <div className="pt-10">
      <Container>
        <div className="flex gap-5">
          {/* Card 1 */}
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg"
            data-aos="fade-up"
          >
            <img
              className="transition-transform duration-300 transform hover:scale-110 w-full"
              src={jhaki}
              alt=""
            />
            <div
              className="px-6 py-4 opacity-0"
              data-aos="fade-in"
              data-aos-delay="400"
            >
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-blue-400 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="pl-10">
              <button
                type="button"
                className="  text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg"
            data-aos="fade-up"
          >
            <img
              className="transition-transform duration-300 transform hover:scale-110 w-full h-[187px]"
              src={tuki}
              alt=""
            />
            <div
              className="px-6 py-4 opacity-0"
              data-aos="fade-in"
              data-aos-delay="800"
            >
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-blue-400 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="pl-10">
              <button
                type="button"
                className="  text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Order Now
              </button>
            </div>
          </div>
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg"
            data-aos="fade-up"
          >
            <img
              className="transition-transform duration-300 transform hover:scale-110 w-full h-[187px]"
              src={fuki}
              alt=""
            />
            <div
              className="px-6 py-4 opacity-0"
              data-aos="fade-in"
              data-aos-delay="800"
            >
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-blue-400 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="pl-10">
              <button
                type="button"
                className="  text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
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
