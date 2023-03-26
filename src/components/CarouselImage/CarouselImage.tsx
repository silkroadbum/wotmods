import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CarouselImage() {
  const { news } = useSelector((state: RootState) => state.news);

  return (
    <Carousel autoPlay infiniteLoop interval={3000} showStatus={false} showThumbs={false}>
      {news.slice(0, 5).map((item) => (
        <div>
          <img src={item.imgUrl} alt={item.title} />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselImage;
