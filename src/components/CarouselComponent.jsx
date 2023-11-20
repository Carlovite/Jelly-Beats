import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Dog1 from "../assets/pexels-chevanon-photography-1108099.jpg";
import Dog2 from "../assets/pexels-lumn-406014.jpg";
import Dog3 from "../assets/pexels-svetozar-milashevich-1490908.jpg";

function CarouselComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const ArrayObj = [
    {
      Image: Dog1,
      Label: "ciao1",
      Description: "Lorem ipsum",
    },
    {
      Image: Dog2,
      Label: "ciao2",
      Description: "Lorem ipsum22",
    },
    {
      Image: Dog3,
      Label: "ciao3",
      Description: "Lorem ipsum333",
    },
  ];
  return (
    <Carousel className="mx-3" activeIndex={index} onSelect={handleSelect}>
      {ArrayObj.map((r) => {
        return (
          <Carousel.Item key={r.Label} className="text-center">
            <img
              src={r.Image}
              alt="placeholder"
              className="CarouselImage"
            ></img>
            <Carousel.Caption>
              <h3>{r.Label}</h3>
              <p>{r.Description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponent;
