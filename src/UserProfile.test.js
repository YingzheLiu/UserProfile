import { getAllByTestId, render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

test("rendering a user profile", () => {
  const user = {
    name: "Nikki Liu",
    imgLink: "./NikkiLiuPic.jpeg",
    position: "Computer Science Student",
    detailLink: "https://www.netflix.com/",
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

  const { getAllByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );
});

test("rendering a user profile with a user of no social media", () => {
  const user = {
    name: "Nikki Liu",
    imgLink: "./NikkiLiuPic.jpeg",
    position: "Computer Science Student",
    detailLink: "https://www.netflix.com/",
    bio:
      "Hello! My name is Nikki Liu. Current undergraduate at the University of Southern California studying Computer Science. Really interested in front-end development. Expected to graduate in spring 2021 and will continue on grad school to obtain a Masters in computer science at USC. Looking forward to a 2021 summer internship. Please contact me at yingzhe@usc.edu.",
  };
  const cardBackgroundColor = "#FAF6F5";
  const cardWidth = "25rem";
  const cardBorderColor = "#ed1c24";
  const fontFamily =
    "Gotham Black, Helvetica Neue, Helvetica, Arial, sans-serif";

  const { queryAllByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );
  expect(queryAllByTestId("social-media-icon").length).toBe(0);
});

test("rendering a user profile with empty social media", () => {
  const user = {
    name: "Nikki Liu",
    imgLink: "./NikkiLiuPic.jpeg",
    position: "Computer Science Student",
    detailLink: "https://www.netflix.com/",
    bio:
      "Hello! My name is Nikki Liu. Current undergraduate at the University of Southern California studying Computer Science. Really interested in front-end development. Expected to graduate in spring 2021 and will continue on grad school to obtain a Masters in computer science at USC. Looking forward to a 2021 summer internship. Please contact me at yingzhe@usc.edu.",
    socialMedia: [],
  };
  const cardBackgroundColor = "#FAF6F5";
  const cardWidth = "25rem";
  const cardBorderColor = "#ed1c24";
  const fontFamily =
    "Gotham Black, Helvetica Neue, Helvetica, Arial, sans-serif";

  const { queryAllByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );

  expect(queryAllByTestId("social-media-icon").length).toBe(0);
});

test("rendering a user profile with a user of 1 social media", () => {
  const user = {
    name: "Nikki Liu",
    imgLink: "./NikkiLiuPic.jpeg",
    position: "Computer Science Student",
    detailLink: "https://www.netflix.com/",
    bio:
      "Hello! My name is Nikki Liu. Current undergraduate at the University of Southern California studying Computer Science. Really interested in front-end development. Expected to graduate in spring 2021 and will continue on grad school to obtain a Masters in computer science at USC. Looking forward to a 2021 summer internship. Please contact me at yingzhe@usc.edu.",
    socialMedia: [
      {
        link: "https://github.com/yingzheliu/",
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

  const { getAllByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );

  expect(getAllByTestId("social-media-icon").length).toBe(1);
});

test("rendering a user profile with a user of more than 1 social media", () => {
  const user = {
    name: "Nikki Liu",
    imgLink: "./NikkiLiuPic.jpeg",
    position: "Computer Science Student",
    detailLink: "https://www.netflix.com/",
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

  const { getAllByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );

  expect(getAllByTestId("social-media-icon").length).toBe(4);
});

test("testing anchor's href on the social media icon", () => {
  const user = {
    name: "Nikki Liu",
    imgLink: "./NikkiLiuPic.jpeg",
    position: "Computer Science Student",
    detailLink: "https://www.netflix.com/",
    bio:
      "Hello! My name is Nikki Liu. Current undergraduate at the University of Southern California studying Computer Science. Really interested in front-end development. Expected to graduate in spring 2021 and will continue on grad school to obtain a Masters in computer science at USC. Looking forward to a 2021 summer internship. Please contact me at yingzhe@usc.edu.",
    socialMedia: [
      {
        link: "https://github.com/",
        icon: faGithub,
        color: "#000000",
      },
    ],
  };
  const cardBackgroundColor = "#FAF6F5";
  const cardWidth = "25rem";
  const cardBorderColor = "#ed1c24";
  const fontFamily =
    "Gotham Black, Helvetica Neue, Helvetica, Arial, sans-serif";

  const { getByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );
  expect(getByTestId("social-media-icon").closest("a")).toHaveAttribute(
    "href",
    "https://github.com/"
  );
});

test("rendering a user profile when the link of a user's social media is missing", () => {
  const user = {
    name: "Nikki Liu",
    imgLink: "./NikkiLiuPic.jpeg",
    position: "Computer Science Student",
    detailLink: "https://www.netflix.com/",
    bio:
      "Hello! My name is Nikki Liu. Current undergraduate at the University of Southern California studying Computer Science. Really interested in front-end development. Expected to graduate in spring 2021 and will continue on grad school to obtain a Masters in computer science at USC. Looking forward to a 2021 summer internship. Please contact me at yingzhe@usc.edu.",
    socialMedia: [
      {
        icon: faGithub,
        color: "#000000",
      },
    ],
  };
  const cardBackgroundColor = "#FAF6F5";
  const cardWidth = "25rem";
  const cardBorderColor = "#ed1c24";
  const fontFamily =
    "Gotham Black, Helvetica Neue, Helvetica, Arial, sans-serif";

  const { queryByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );
  expect(queryByTestId("social-media-icon")).toBeNull();
});

test("rendering a user profile when the icon of a user's social media is missing", () => {
  const user = {
    name: "Nikki Liu",
    imgLink: "./NikkiLiuPic.jpeg",
    position: "Computer Science Student",
    detailLink: "https://www.netflix.com/",
    bio:
      "Hello! My name is Nikki Liu. Current undergraduate at the University of Southern California studying Computer Science. Really interested in front-end development. Expected to graduate in spring 2021 and will continue on grad school to obtain a Masters in computer science at USC. Looking forward to a 2021 summer internship. Please contact me at yingzhe@usc.edu.",
    socialMedia: [
      {
        link: "https://github.com/",
        color: "#000000",
      },
    ],
  };
  const cardBackgroundColor = "#FAF6F5";
  const cardWidth = "25rem";
  const cardBorderColor = "#ed1c24";
  const fontFamily =
    "Gotham Black, Helvetica Neue, Helvetica, Arial, sans-serif";

  const { queryByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );
  expect(queryByTestId("social-media-icon")).toBeNull();
});
