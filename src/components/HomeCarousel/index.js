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

    const clickFurtherCleaning = () => {
      window.location.href = "/service/cleaning"
    }
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} prevLabel={""} nextLabel={""} interval={50000000} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/homecarousel2.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <Card className="text-center w-60 mt-5 h-50">
                <Card.Header className="background-color-2">Get free quotes for cleaning</Card.Header>
                <Card.Body className="text-color-2" >
                    <Card.Title className="my-4">Where do you need cleaning</Card.Title>
                    <div className="d-flex flex-wrap align-items-center justify-content-center my-4">
                        <Link to="service/cleaning" className="mx-2 bg-color-icon-div1 text-color-2 pt-2 nav-link">
                            <BsBuilding fontSize="3em" />
                            <div>APARTMENT</div>
                        </Link>
                        <Link to="service/cleaning" className="mx-2 bg-color-icon-div1 text-color-2 pt-2 nav-link">
                            <BsHouseFill fontSize="3em" />
                            <div>HOUSE</div>
                        </Link>
                        <Link to="service/cleaning" className="mx-2 bg-color-icon-div1 text-color-2 pt-2 nav-link">
                            <BsFileEarmarkText fontSize="3em" />
                            <div>OFFICE</div>
                        </Link>
                        <Link to="service/cleaning" className="mx-2 bg-color-icon-div1 text-color-2 pt-2 nav-link">
                            <BsQuestionLg fontSize="3em" />
                            <div>MISCELLANEOUS</div>
                        </Link>
                    </div>
                    <Button variant="warning" className="mt-3 text-white" onClick={clickFurtherCleaning}>further</Button>
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