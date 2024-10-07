import { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Container from "./Container";

const ArrivalComponents = () => {
  // Custom Next Arrow component
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="next absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full cursor-pointer shadow-lg z-10"
      >
        <IoIosArrowForward size={24} />
      </div>
    );
  };

  // Custom Previous Arrow component
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full cursor-pointer shadow-lg z-10"
      >
        <IoIosArrowBack size={24} />
      </div>
    );
  };

  // Slick slider settings
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [product, setProduct] = useState([]);

  // Fetch data from the API
  const getData = () => {
    axios
      .get("https://dummyjson.com/recipes?limit=10&skip=10&select=name,image")
      .then((response) => {
        setProduct(response.data.recipes);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    
    <div className="gap-6 relative pt-10">
      <Container>
      <h2 className="text-[40px] font-bold text-yellow-300">Our Special Items</h2>
        <Slider {...settings}>
          {product.map((item, i) => (
            <div key={i} id="product" className="p-4">
              <img
                src={item.image}
                alt={item.ingredients}
                className="rounded-lg w-full h-60 object-cover"
              />
              <h2 className="mt-2 font-semibold">{item.name}</h2>
              <p>{item.total}</p>
              <span>Meal type: {item.total}</span>
              <h3 className="text-gray-700">{item.instructions}</h3>
              <span>{item.rating}</span>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default ArrivalComponents;
