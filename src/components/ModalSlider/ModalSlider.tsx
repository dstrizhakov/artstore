import { FC } from 'react';
import styles from './ModalSlider.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination, Virtual } from 'swiper/modules';

export interface ISlide {
  id: string;
  img: string;
  title: string;
}
type MainSliderProps = {
  slides: ISlide[];
  activeSlideIndex: string | null;
};

const ModalSlider: FC<MainSliderProps> = ({ slides, activeSlideIndex }) => {
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
          className={styles.modalSwiper}
          spaceBetween={0}
          centeredSlides
          initialSlide={Number(activeSlideIndex)}
          pagination={{
            clickable: true,
          }}
          navigation
          loop
          effect={'fade'}
          modules={[Autoplay, Pagination, Navigation, EffectFade, Virtual]}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className={styles.modalSwiperSlide}>
              <img src={slide.img} alt={slide.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ModalSlider;
