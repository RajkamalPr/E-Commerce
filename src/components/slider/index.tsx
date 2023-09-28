import { Carousel } from "react-bootstrap"
import bestLaptopForGaming from "../../assets/imgs/slider-img/apple-products.jpg"
import bestAsusGamingLaptop from "../../assets/imgs/slider-img/Best-Asus-Gaming-Laptop-To-Buy.jpg"
import "./slider.css"
const slider = () => {
  return (
    <>
      <Carousel data-bs-theme='dark'>
        <Carousel.Item>
          <img
            className='d-block w-100 sliderImg-size'
            src={bestLaptopForGaming}
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 sliderImg-size'
            src={bestAsusGamingLaptop}
            alt='Second slide'
          />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default slider
