# React User Profile

A simple user profile component for React (deployed link) <br />
<img src="https://github.com/YingzheLiu/UserProfile/blob/main/UserProfileExample.jpg" width="500" height="650">
## Code Example
```js
<UserProfile
  user={user}
  cardBackgroundColor={cardBackgroundColor}
  cardWidth={cardWidth}
  cardBorderColor={cardBorderColor}
  fontFamily={fontFamily}
/>
```
`user` is an object with all the basic information
```js
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
  ```
  
