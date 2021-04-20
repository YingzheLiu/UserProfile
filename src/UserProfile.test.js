import { getAllByTestId, render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

/********************/
/** Test User Name **/
/********************/
test("rendering a user profile with a user's name is not empty", () => {
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

  const { getByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );
  expect(getByTestId("user-name")).toHaveTextContent("Nikki Liu");
});

test("rendering a user profile with a user of no name", () => {
  const user = {
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

  const { queryByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );
  expect(queryByTestId("user-name")).toBeNull();
});

test("rendering a user profile with a user's name is empty", () => {
  const user = {
    name: "",
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

  const { queryByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );
  expect(queryByTestId("user-name")).toBeNull();
});

/**********************/
/** Test User Avatar **/
/**********************/
test("rendering a user profile with a user's avatar link is valid", () => {
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

  const { getByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );
  const avatar = getByTestId("user-avatar");
  expect(avatar).toHaveAttribute("src", "./NikkiLiuPic.jpeg");
  expect(avatar).toHaveAttribute("alt", "User Avatar");
});

test("rendering a user profile with a user's imgLink is missing", () => {
  const user = {
    name: "Nikki Liu",
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

  const { queryByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );
  expect(queryByTestId("user-avatar")).toBeNull();
});

test("rendering a user profile with a user's imgLink is empty", () => {
  const user = {
    name: "Nikki Liu",
    imgLink: "",
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

  const { queryByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );
  expect(queryByTestId("user-avatar")).toBeNull();
});

test("rendering a user profile with a user's imgLink is invalid", () => {
  const user = {
    name: "Nikki Liu",
    imgLink: "./invalidImgLink",
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

  const { getByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );
  const avatar = getByTestId("user-avatar");
  expect(avatar).toHaveAttribute("src", "./invalidImgLink");
  expect(avatar).toHaveAttribute("alt", "User Avatar");
});

/************************/
/** Test User Position **/
/************************/
test("rendering a user profile with a user's position is not empty", () => {
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

  const { getByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );
  expect(getByTestId("user-position")).toHaveTextContent(
    "Computer Science Student"
  );
});
test("rendering a user profile with a user's position is missing", () => {
  const user = {
    name: "Nikki Liu",
    imgLink: "./NikkiLiuPic.jpeg",
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

  const { queryByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );
  expect(queryByTestId("user-position")).toBeNull();
});
test("rendering a user profile with a user's position is empty", () => {
  const user = {
    name: "Nikki Liu",
    imgLink: "./NikkiLiuPic.jpeg",
    detailLink: "https://www.netflix.com/",
    position: "",
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

  const { queryByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );
  expect(queryByTestId("user-position")).toBeNull();
});

/****************************/
/** Test Social Media Icon **/
/****************************/
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

  const { getByTestId, getAllByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );

  expect(getAllByTestId("social-media-icon").length).toBe(1);
  expect(getByTestId("social-media-icon").closest("a")).toHaveAttribute(
    "href",
    "https://github.com/yingzheliu/"
  );
  expect(getByTestId("social-media-icon").closest("a")).toHaveAttribute(
    "href",
    "https://github.com/yingzheliu/"
  );
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

/*******************/
/** Test User Bio **/
/*******************/
test("rendering a user profile with a user's bio is not empty", () => {
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

  const { getByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );
  expect(getByTestId("user-bio")).toHaveTextContent(
    "Hello! My name is Nikki Liu. Current undergraduate at the University of Southern California studying Computer Science. Really interested in front-end development. Expected to graduate in spring 2021 and will continue on grad school to obtain a Masters in computer science at USC. Looking forward to a 2021 summer internship. Please contact me at yingzhe@usc.edu."
  );
});

test("rendering a user profile with a user's bio is missing", () => {
  const user = {
    name: "Nikki Liu",
    imgLink: "./NikkiLiuPic.jpeg",
    position: "Computer Science Student",
    detailLink: "https://www.netflix.com/",
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

  const { queryByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );
  expect(queryByTestId("user-bio")).toBeNull();
});
test("rendering a user profile with a user's bio is empty", () => {
  const user = {
    name: "Nikki Liu",
    imgLink: "./NikkiLiuPic.jpeg",
    position: "Computer Science Student",
    detailLink: "https://www.netflix.com/",
    bio: "",
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

  const { queryByTestId } = render(
    <UserProfile
      user={user}
      cardBackgroundColor={cardBackgroundColor}
      cardWidth={cardWidth}
      cardBorderColor={cardBorderColor}
      fontFamily={fontFamily}
    />
  );
  expect(queryByTestId("user-bio")).toBeNull();
});
