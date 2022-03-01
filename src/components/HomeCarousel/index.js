import React , {useState } from "react"
import { Link } from "react-router-dom"
import { Carousel , Button , Card } from 'react-bootstrap'
import { BsBuilding , BsHouseFill , BsFileEarmarkText , BsQuestionLg } from "react-icons/bs";

import "./HomeCarousel.css"

export default function HomeCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} prevLabel={""} nextLabel={""} interval={50000000} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/homecarousel2.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <Card className="text-center w-500px mt-5">
                <Card.Header className="background-color-2">Get free quotes for cleaning</Card.Header>
                <Card.Body className="text-color-2" >
                    <Card.Title className="my-1">Where do you need cleaning</Card.Title>
                    <div className="d-flex flex-wrap align-items-center justify-content-center my-4">
                        <Link to="service/cleaning?ccategory=APARTMENT" className="mx-2 bg-color-icon-div1 text-color-2 pt-3 nav-link">
                            <BsBuilding fontSize="1.5em" />
                            <div className="f-size-10px" >APARTMENT</div>
                        </Link>
                        <Link to="service/cleaning?ccategory=HOUSE" className="mx-2 bg-color-icon-div1 text-color-2 pt-3 nav-link">
                            <BsHouseFill fontSize="1.5em" />
                            <div className="f-size-10px" >HOUSE</div>
                        </Link>
                        <Link to="service/cleaning?ccategory=OFFICE" className="mx-2 bg-color-icon-div1 text-color-2 pt-3 nav-link">
                            <BsFileEarmarkText fontSize="1.5em" />
                            <div className="f-size-10px" >OFFICE</div>
                        </Link>
                        <Link to="service/cleaning?ccategory=MISCELLANEOUS" className="mx-2 bg-color-icon-div1 text-color-2 pt-3 nav-link">
                            <BsQuestionLg fontSize="1.5em" />
                            <div className="f-size-10px" >MISCELLANEOUS</div>
                        </Link>
                    </div>
                    <Button variant="warning" className="mt-2 text-white">further</Button>
                </Card.Body>
            </Card>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/homecarousel1.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}