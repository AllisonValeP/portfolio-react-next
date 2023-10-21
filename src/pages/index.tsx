import { styled } from '../styles'
import Image from "next/image"

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import image01 from '../assets/imageHome/1.JPG'
import image02 from '../assets/imageHome/2.JPG'
import image03 from '../assets/imageHome/3.JPG'
import image04 from '../assets/imageHome/4.JPG'
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
        <Image src={image01} alt='' style={{width: '90vw', height:'100vh'}} width={1900}/>
        <footer>
          <a>imagem01</a>
        </footer>
      </ImageContainer>

      <ImageContainer className="keen-slider__slide">
        <Image src={image02} alt='' style={{width: '90vw', height:'100vh'}} width={1900}/>
        <footer>
          <a>imagem02</a>
        </footer>
      </ImageContainer>

      <ImageContainer className="keen-slider__slide">
        <Image src={image03} alt='' style={{width: '90vw', height:'100vh'}} width={1900}/>
        <footer>
          <a>imagem03</a>
        </footer>
      </ImageContainer>

      <ImageContainer className="keen-slider__slide">
        <Image src={image04} alt='' style={{width: '90vw', height:'100vh'}} width={1900}/>
        <footer>
          <a>imagem04</a>
        </footer>
      </ImageContainer>
    </HomeContaier>

  )
}
