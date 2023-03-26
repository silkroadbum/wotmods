import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { replaceFormatImg } from '../../utils/utils';

function CarouselImage() {
  const { news } = useSelector((state: RootState) => state.news);

  return (
    <Carousel autoPlay infiniteLoop interval={2000} showStatus={false} showThumbs={false}>
      {news.slice(0, 5).map((item) => (
        <div key={item.id}>
          <picture>
            <source srcSet={replaceFormatImg(item.imgUrl, 'avif')} />
            <source srcSet={replaceFormatImg(item.imgUrl, 'webp')} />
            <img src={item.imgUrl} alt={item.title} loading="lazy" />
          </picture>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselImage;
