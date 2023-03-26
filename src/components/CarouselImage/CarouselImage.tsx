import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

function CarouselImage() {
  const { news } = useSelector((state: RootState) => state.news);

  return (
    <Carousel fade>
      {news.slice(0, 5).map((item) => (
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={item.imgUrl} alt={item.title} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselImage;
