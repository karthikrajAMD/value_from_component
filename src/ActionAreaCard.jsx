import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
export default function ActionAreaCard() {
  const mediaData = [
    {
      name: "Crocodile",
      img: "https://www.thoughtco.com/thmb/rc3o5xAvMSPf6yQEsk88JlW38Bs=/2505x1879/smart/filters:no_upscale()/GettyImages-157617413-0920e91168ed474aab541f9e8b6b5672.jpg",
      fact: `These reptiles can go through 8,000 teeth over a lifetime, according to the San Diego Zoo. Crocodiles don't sweat. To keep cool, they open their mouths in a process called "mouth gaping," which is a lot like panting. "Crying crocodile tears" refers to a person expressing insincere remorse.`,
    },
    {
      name: "Lion",
      img: "https://i.pinimg.com/736x/fb/be/8e/fbbe8e6e92fd326afb90eccc970dd69e.jpg",
      fact: `Lions are the second-largest cats in the world, after tigers. Known as the "king of beasts" or "king of the jungle," these regal felines once roamed Africa, Asia and Europe, but now only live in parts of Africa and India.`,
    },
    {
      name: "Tiger",
      img: "https://www.freeiconspng.com/uploads/tiger-png-pictures-4.jpg",
      fact: `Tigers are some of the most amazing creatures on the planet, they are the largest members of the cat family and are renowned for their power and strength. As the largest member of the cat family, Tigers are strong, powerful and one of nature's most feared predators.`,
    },
  ];
  const [curr, setCurr] = useState(0);
  const next = () => {
    setCurr(curr === mediaData.length - 1 ? 0 : curr + 1);
  };
  const prev = () => {
    setCurr(curr === 0 ? mediaData.length - 1 : curr - 1);
  };
  console.log(curr);
  return (
    <div className="container">
      <div className="media-content">
        <div className="left-right">
          <div className="left" onClick={() => prev()}>
            <ChevronLeftIcon fontSize="large" />
          </div>
          <div className="right" onClick={() => next()}>
            <ChevronRightIcon fontSize="large" />
          </div>
        </div>
        <div>
          {mediaData.map((e, i) => {
            return (
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <div
                    className={i === curr ? "slide active" : "slide"}
                    key={i}
                  >
                    {i === curr && (
                      <>
                        <div className="media-image">
                          <img className="media-img" src={e.img} />
                        </div>
                        <br />

                        <CardContent>
                          <h3 className="typo">{e.name}</h3>

                          <p className="media-para">{e.fact}</p>
                        </CardContent>
                      </>
                    )}
                  </div>
                </CardActionArea>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
