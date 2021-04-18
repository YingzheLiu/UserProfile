import React from "react";
import Container from "react-bootstrap/Container";
import UserProfile from "./UserProfile";
import Row from "react-bootstrap/Row";

function App() {
  const user = {
    name: "Nikki Liu",
    position: "Computer Science Student",
    detailLink: "https://www.netflix.com/",
    bio:
      "Hello! My name is Nikki Liu. Current undergraduate at the University of Southern California studying Computer Science interested in software engineering and development opportunities. Expected to graduate in 2021 and will continue on grad school to obtain a Masters in computer science at USC. Looking forward to a 2021 summer internship. Please contact me at yingzhe@usc.edu.",
    socialMediaLink: {
      github: "https://github.com/yingzheliu/",
      instagram: "https://www.instagram.com/",
      linkedIn: "https://www.linkedin.com/in/nikki-liu-cs/",
      twitter: "https://twitter.com/",
    },
  };
  const props = { cardBackgroundColor: "#FAF6F5", cardWidth: "25rem" };
  return (
    <>
      <Container className="App mt-3">
        <Row>
          <UserProfile user={user} props={props} />
        </Row>
      </Container>
    </>
  );
}

export default App;
