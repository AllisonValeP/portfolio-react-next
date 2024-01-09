import Image from "next/image"

import { ImagesGalleryContaier } from '../../styles/pages/images'

import image01 from '../../assets/imageHome/1.jpg'
import image02 from '../../assets/imageHome/2.jpg'
import image03 from '../../assets/imageHome/3.jpg'
import image04 from '../../assets/imageHome/4.jpg'

export default function imagesGallery(){
    return(
    <ImagesGalleryContaier>
         <Image src={image01} alt=''/> 
         <Image src={image02} alt=''/>
         <Image src={image03} alt=''/>
         <Image src={image04} alt=''/>
    </ImagesGalleryContaier>
    )
}