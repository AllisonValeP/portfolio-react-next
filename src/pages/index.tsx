import { styled } from '../styles'
import Image from "next/image"

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import image01 from '../assets/imageHome/1.jpg'
import image02 from '../assets/imageHome/2.jpg'
import image03 from '../assets/imageHome/3.jpg'
import image04 from '../assets/imageHome/4.jpg'

import { HomeContaier, ImageContainer } from '../styles/pages/home'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides:{
      perView: 1,
    }
  })

  return (
    <HomeContaier ref={sliderRef} className="keen-slider">
      <ImageContainer className="keen-slider__slide">
        <Image src={image01} alt=''/>
        <footer>
          <a>imagem01</a>
        </footer>
      </ImageContainer>

      <ImageContainer className="keen-slider__slide">
        <Image src={image02} alt=''/>
        <footer>
          <a>imagem02</a>
        </footer>
      </ImageContainer>

      <ImageContainer className="keen-slider__slide">
        <Image src={image03} alt=''/>
        <footer>
          <a>imagem03</a>
        </footer>
      </ImageContainer>

      <ImageContainer className="keen-slider__slide">
        <Image src={image04} alt=''/>
        <footer>
          <a>imagem04</a>
        </footer>
      </ImageContainer>
    </HomeContaier>

  )
}
