import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import {
  Container,
  Heading,
  SliderArrowLeft,
  SliderArrowRight,
  SliderControler,
  SwiperContainer,
  SwiperPagination,
  SwiperSlideImg,
  SwiperSlideStyled,
} from "./slider-components";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import LogoImg from "@/assets/logo.png";
import icoWhatsapp from "@/assets/whatsapp.svg";

import slide_image_1 from "@/assets/images/img_1.png";
import slide_image_2 from "@/assets/images/img_2.png";
import slide_image_3 from "@/assets/images/img_3.png";
import slide_image_4 from "@/assets/images/img_4.png";
import slide_image_5 from "@/assets/images/img_5.png";
import slide_image_6 from "@/assets/images/img_6.png";
import slide_image_7 from "@/assets/images/img_7.png";
import { useEffect, useState } from "react";

export function Slider() {
  const [whatsappLink, setWhatsappLink] = useState("");

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const baseLink = isMobile
      ? "https://api.whatsapp.com/send"
      : "https://web.whatsapp.com/send";
    const phone = "5565996643812";
    const text =
      "Ol%C3%A1%20peguei%20seu%20contato%20no%20site,%20pode%20me%20atender?";

    setWhatsappLink(`${baseLink}?phone=${phone}&text=${text}`);
  }, []);

  return (
    <Container>
      <Heading className="flex flex-col items-center justify-around md:flex-row">
        <img src={LogoImg} alt="" className="h-32 w-32 rounded-full" />
        TOYOTAN MECÂNICA ESPECIALIZADA
        <span className="flex flex-col items-center justify-center gap-2 text-3xl">
          <a
            target="_blank"
            href={whatsappLink}
            className="relative flex h-10 w-10"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <img
              title="Clique para falar conosco."
              src={icoWhatsapp}
              className="relative inline-flex h-10 w-10 rounded-full bg-green-500"
            />
          </a>
          Entre em contato
          <p>(65) 99664-3812</p>
        </span>
      </Heading>

      <SwiperContainer
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          // clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlideStyled>
          <SwiperSlideImg src={slide_image_1} alt="slide_image" />
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <SwiperSlideImg src={slide_image_2} alt="slide_image" />
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <SwiperSlideImg src={slide_image_3} alt="slide_image" />
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <SwiperSlideImg src={slide_image_4} alt="slide_image" />
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <SwiperSlideImg src={slide_image_5} alt="slide_image" />
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <SwiperSlideImg src={slide_image_6} alt="slide_image" />
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <SwiperSlideImg src={slide_image_7} alt="slide_image" />
        </SwiperSlideStyled>

        <SliderControler>
          <SliderArrowLeft className="swiper-button-prev slider-arrow bg-secondary-foreground" />
          <SliderArrowRight className="swiper-button-next slider-arrow bg-secondary-foreground" />

          <SwiperPagination className="swiper-pagination"></SwiperPagination>
        </SliderControler>
      </SwiperContainer>
    </Container>
  );
}
