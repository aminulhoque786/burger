import React, { useEffect } from 'react';
import Container from './Container';
import pok from "../assets/remove.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Menu = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="pt-5">
      <Container>
        <div className="flex gap-40">
          {/* Image Section */}
          <div
  className="w-2/5 "
  data-aos="zoom-in"
  data-aos-easing="ease-out-back"
  data-aos-duration="600"
>
  <div className="drop-shadow-2xl">
    <img src={pok} alt="Food Image" />
  </div>
</div>



          {/* Text Section */}
          <div className="w-2/5 pt-20" data-aos="zoom-in"  data-aos-easing="ease-out-back"
            data-aos-duration="800">
            <h5 className="text-[20px] font-bold text-yellow-300 "  data-aos-easing="ease-out-back"  data-aos-duration="1000"  >About us</h5>
            <h3 className="text-yellow-400 font-bold text-[40px]">
              We make good and <span className="text-yellow-300 font-[30px] text-bold">Tasty Food</span>
            </h3>
            <p className="text-[18px] font-semibold pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos dolores quas corrupti 
              reiciendis, temporibus distinctio quibusdam omnis! Facilis quos nobis cumque id esse itaque culpa delectus 
              magnam qui numquam?
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
