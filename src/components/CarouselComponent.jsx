import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselComponent() {
  const featuredItems = [
    {
      src: "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1743585269448_foamibizathemedluxurypoolpartyweb.jpg",
    },

    {
      src: "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1743510058398_webshowcase1240x300.jpg",
    },

    {
      src: "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1743155482801_madhuvanfestwebregions.jpg",
    },

    {
      src: "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg",
    },

  ];

  return (
    <Carousel>
      {featuredItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.src} alt={item.alt} />
          <Carousel.Caption>
            <h3>{item.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
