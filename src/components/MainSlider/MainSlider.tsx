import { FC } from 'react';
import styles from './MainSlider.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export interface ISlide {
  id: string;
  img: string;
  title: string;
}
type MainSliderProps = {
  slides: ISlide[];
};

const MainSlider: FC<MainSliderProps> = ({ slides }) => {
  if (!slides.length) {
    return (
      <div className={styles.wrapper}>
        <h2>Loading...</h2>;
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {!!slides.length && (
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          effect={'fade'}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className={styles.mainslider}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.img} alt={slide.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default MainSlider;
