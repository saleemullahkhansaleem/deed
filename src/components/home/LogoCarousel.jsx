import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../Container";

const logos = [
  "images/clients/hbl.png",
  "images/clients/mcb.png",
  "images/clients/pakfoods.png",
  "images/clients/pycl.png",
  "images/clients/soneri.png",
  "images/clients/suzuki.png",
  "images/clients/ubl.png",
];

const LogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280, // XL
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024, // LG
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // MD
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Container className="relative py-4">
      <h1 className="text-3xl text-center py-4 font-bold text-secondary">
        Our Clients
      </h1>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="p-2">
            <img
              src={logo}
              alt={`logo-${index}`}
              className="object-contain h-24 mx-auto"
            />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default LogoCarousel;
