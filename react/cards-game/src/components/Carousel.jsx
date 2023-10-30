import Slider from 'react-slick';
import Deck from './Deck';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
  };

  return (
    <div>
      <Slider {...settings}>
        <Deck />
      </Slider>
    </div>
  );
};

export default Carousel;
