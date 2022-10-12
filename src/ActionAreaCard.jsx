import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
export default function ActionAreaCard() {
  const mediaData = [
    {
      name: "Google was originally named BackRub.",
      img: "https://exchange4media.gumlet.io/news-photo/116641-backrub.jpg?w=400&dpr=2.6",
      fact: `In 1996, Page and Brin collaborated on a pioneering "web crawler" concept curiously called BackRub. Some speculate that the early search engine's nomenclature was a nod to retrieving backlinks. BackRub, which linked to Brin's and Page's '90s-tastic original homepages, lived on Stanford's servers for more than a year, but eventually chewed up too much bandwidth.`,
    },
    {
      name: `Google is a play on the word "googol".`,
      img: "https://i.ytimg.com/vi/SSdZq0b9OkU/maxresdefault.jpg",
      fact: `On Sept. 15, 1997, over the BackRub title, Page and Brin registered the domain name of their mushrooming project as Google, a twist on "googol," a mathematical term represented by the numeral one followed by 100 zeros. The name hinted at the seemingly infinite amount of data the brainy pair code their fledgling search engine to mine, make sense of and deliver. Many wondered if Google is a misspelling of Googol.`,
    },
    {
      name: "Google's first doodle was a Burning Man stick figure.",
      img: "https://lh3.googleusercontent.com/xgFQmaqRyM53vsMDUWcx3_IZlvM2mPB4zHEc8WROZYl_2SEL_LZRjWIETW4l4ywc_O9m4WB-CHguH8p8_75K1_HlsCE_Om4HQ6-SOBk=s660",
      fact: `The inaugural doodle was an out-of-the-office message that Page and Brin created in August of 1998 to let people know they'd shipped off to the Burning Man festival. The future billionaires positioned the iconic Man behind the second "o" in Google's logo. `,
    },
    {
      name: "Google New York began at a Starbucks on 86th Street.",
      img: "https://images.thestar.com/RRwuLoTTJiYwWKpB4PSJXZNBZOk=/1086x724/smart/filters:cb(2700061000):format(webp)/https://www.thestar.com/content/dam/thestar/business/technology/2018/12/17/google-to-invest-more-than-1b-to-establish-nyc-campus/google.jpg",
      fact: `In 2000, Google unofficially kicked off its New York arm at a Starbucks in New York City. It was helmed by a one-person sales "team." Now, thousands of "NYooglers" clock-in at its swanky, 2.9 million-square-foot New York office, a former Port Authority building on 111 8th Ave.`,
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
      <div className="card-container">
        <div className="media-content ">
          <div className="fact-body">
            {/* <div className="left-right"> */}
            <div className="left" onClick={() => prev()}>
              <ChevronLeftIcon fontSize="large" />
            </div>
            <div className="right" onClick={() => next()}>
              <ChevronRightIcon fontSize="large" />
            </div>
            {/* </div> */}
            {mediaData.map((e, i) => {
              return (
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <div
                      className={i === curr ? "slide active" : "slide"}
                      key={i}
                    >
                      {i === curr && (
                        <>
                          <div className="content-detail">
                            <div className="media-image">
                              <img className="media-img" src={e.img} />
                            </div>
                            <br />

                            <CardContent>
                              <h3 className="typo">{e.name}</h3>

                              <p className="media-para">{e.fact}</p>
                            </CardContent>
                          </div>
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
    </div>
  );
}
