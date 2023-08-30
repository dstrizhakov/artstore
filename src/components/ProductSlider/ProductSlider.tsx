import { FC, useLayoutEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './ProductSlider.module.scss';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import SwiperClass from 'swiper/types/swiper-class';
import SwiperCore from 'swiper';
import { FreeMode, Navigation, Thumbs, Controller } from 'swiper/modules';
import Modal from '../Modal/Modal';

export interface ImagesSlide {
  id: string;
  img: string;
  title: string;
}
type ProductSliderProps = {
  slides: ImagesSlide[];
};

const ProductSlider: FC<ProductSliderProps> = ({ slides }) => {
  const [modal, setModal] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [firstSwiper] = useState<SwiperClass>();
  const [secondSwiper] = useState<SwiperClass>();
  const swiper1Ref = useRef<SwiperCore | null>(null);
  const swiper2Ref = useRef();
  const [activeSlideImg, setActiveSlideImg] = useState<string | null>(null);

  useLayoutEffect(() => {
    if (swiper1Ref.current !== null) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
    }
  }, []);

  const popupImage = (img: string) => {
    setActiveSlideImg(img);
    setModal(true);
  };

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => {
          if (swiper1Ref.current !== null) {
            swiper1Ref.current = swiper;
          }
        }}
        controller={{ control: secondSwiper }}
        loop={true}
        spaceBetween={3}
        slidesPerView={1}
        grabCursor={false}
        navigation={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Controller]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img onClick={() => popupImage(slide.img)} src={slide.img} alt={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        controller={{ control: firstSwiper }}
        loop={true}
        spaceBetween={3}
        slidesPerView={5}
        watchSlidesProgress
        touchRatio={0.2}
        slideToClickedSlide={true}
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs, Controller]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.img} alt={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal isOpen={modal} setIsOpen={setModal}>
        {activeSlideImg && <img className={styles.popup_img} src={activeSlideImg} alt="Active Slide" />}
      </Modal>
    </div>
  );
};

export default ProductSlider;
