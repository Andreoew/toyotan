import { ArrowLeft, ArrowRight } from "lucide-react";
import styled from "styled-components";
import { SwiperSlide, Swiper } from "swiper/react";

// Estilos para o componente Slider
export const Container = styled.div`
  max-width: 124rem;
  padding: 4rem 1rem;
  margin: 0 auto;

  @media (min-width: 640px) {
    .container {
      max-width: 640px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 768px;
    }
  }
  @media (min-width: 1024px) {
    .container {
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px) {
    .container {
      max-width: 1280px;
    }
  }
  @media (min-width: 1536px) {
    .container {
      max-width: 1536px;
    }
  }
`;

export const Heading = styled.h1`
  padding: 1rem 0;
  font-size: 3.5rem;
  text-align: center;
`;

export const SwiperContainer = styled(Swiper)`
  height: 52rem;
  padding: 2rem 0;
  position: relative;

  @media (max-width: 500px) {
    height: 47rem;
  }
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  width: 37rem;
  height: 42rem;
  position: relative;

  @media (max-width: 500px) {
    width: 28rem !important;
    height: 36rem !important;
  }
`;

export const SliderController = styled.div`
  position: relative;
  bottom: 0rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .swiper-button-next {
    left: 58% !important;
    transform: translateX(-58%) !important;
  }

  ::after {
    content: "";
  }

  ion-icon {
    font-size: 2rem;
    color: #222224;
  }

  @media (max-width: 990px) {
    .swiper-button-next {
      left: 70% !important;
      transform: translateX(-70%) !important;
    }
  }

  @media (max-width: 450px) {
    .swiper-button-next {
      left: 80% !important;
      transform: translateX(-80%) !important;
    }
  }

  @media (max-width: 990px) {
    .swiper-button-prev {
      left: 30% !important;
      transform: translateX(-30%) !important;
    }
  }

  @media (max-width: 450px) {
    .swiper-button-prev {
      left: 20% !important;
      transform: translateX(-20%) !important;
    }
  }
`;

export const SliderArrowLeft = styled(ArrowLeft)`
  color: #9d9d9d;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  left: 42%;
  transform: translateX(-42%);
  filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
  margin-top: -2rem;
`;

export const SliderArrowRight = styled(ArrowRight)`
  color: #9d9d9d;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  left: 42%;
  transform: translateX(-42%);
  filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
  margin-top: -2rem;
`;

export const SwiperSlideImg = styled.img`
  width: 37rem;
  height: 42rem;
  border-radius: 2rem;
  object-fit: cover;

  @media (max-width: 500px) {
    width: 28rem !important;
    height: 36rem !important;
  }
`;


export const SwiperPagination = styled.div`
  position: absolute;
  bottom: 0rem;
  left: 50%;
  transform: translateX(-50%);
  width: auto;

  .swiper-pagination-bullet {
    filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
    background-color: red;

    &.swiper-pagination-bullet-active {
      background-color: red;
    }
  }
`;

