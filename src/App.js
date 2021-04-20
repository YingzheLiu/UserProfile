import React from "react";
import Container from "react-bootstrap/Container";
import UserProfile from "./UserProfile";
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const user = {
    name: "Nikki Liu",
    imgLink: "./NikkiLiuPic.jpeg",
    position: "Computer Science Student",
    detailLink: "https://nikkiliu-myopenfda.netlify.app/",
    bio:
      "Hello! My name is Nikki Liu. Current undergraduate at the University of Southern California studying Computer Science. Really interested in front-end development. Expected to graduate in spring 2021 and will continue on grad school to obtain a Masters in computer science at USC. Looking forward to a 2021 summer internship. Please contact me at yingzhe@usc.edu.",
    socialMedia: [
      {
        link: "https://github.com/yingzheliu/",
        icon: faGithub,
        color: "#000000",
      },
      {
        link: "https://www.instagram.com/",
        icon: faInstagram,
        color: "#8a3ab9",
      },
      {
        link: "https://www.linkedin.com/in/nikki-liu-cs/",
        icon: faLinkedin,
        color: "#0073b1",
      },
      {
        link: "https://twitter.com/",
        icon: faTwitter,
        color: "#1DA1F2",
      },
    ],
  };
  const cardBackgroundColor = "#FAF6F5";
  const cardWidth = "25rem";
  const cardBorderColor = "#ed1c24";
  const fontFamily =
    "Gotham Black, Helvetica Neue, Helvetica, Arial, sans-serif";
  return (
    <>
      <Container className="App mt-3">
        <UserProfile
          user={user}
          cardBackgroundColor={cardBackgroundColor}
          cardWidth={cardWidth}
          cardBorderColor={cardBorderColor}
          fontFamily={fontFamily}
        />
      </Container>
    </>
  );
}

export default App;
