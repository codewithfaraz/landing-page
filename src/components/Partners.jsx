import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  {
    name: "Partner 1",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google-2015-logo.svg",
  },
  {
    name: "Partner 2",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
  },
  {
    name: "Partner 3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
  },
  {
    name: "Partner 4",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Partner 5",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
];

export default function Partners() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world's most innovative teams
        </h2>
        <div className="mx-auto mt-10 max-w-screen-xl px-4">
          <Slider {...settings}>
            {partners.map((partner) => (
              <div key={partner.name} className="flex justify-center px-4">
                <img
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
                  src={partner.logo}
                  alt={partner.name}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
