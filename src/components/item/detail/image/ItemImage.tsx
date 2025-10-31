import { useState } from "react";
import { FreeMode, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import "@/styles/imageSwiper.css";

interface ItemImageProps {
  images: string[];
}

const ItemImage = ({ images }: ItemImageProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  if (!images || images.length === 0) {
    return <div className="placeholder-box">이미지가 없습니다.</div>;
  }

  return (
    <div className="image-swiper-container">
      <Swiper
        className="main-swiper"
        modules={[Thumbs, Pagination]}
        pagination={{
          type: "fraction",
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`이미지 ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="thumbnail-swiper"
        modules={[Thumbs, FreeMode]}
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        slidesPerView={"auto"}
        freeMode={true}
        watchSlidesProgress={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`썸네일 ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ItemImage;
