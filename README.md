# React User Profile

A simple user profile component for React ([demo deployed on Heroku](https://react-user-profile-nikki.herokuapp.com/)) <br />
<img src="https://github.com/YingzheLiu/UserProfile/blob/main/UserProfileExample.jpg" width="300" height="390"> <br />
Libraries used in the component: bootstrap, prop-types, fortawesome

## Code Example of How to Use the React User Profile Component
```js
<UserProfile
  user={user}
  cardBackgroundColor={cardBackgroundColor}
  cardWidth={cardWidth}
  cardBorderColor={cardBorderColor}
  fontFamily={fontFamily}
/>
```
#### `user` is an object with all the basic information
Property | Description
------------ | -------------
name | First and the last name of the user
imgLink | Link for the image to be used as the user avatar
position | 2 or 3 words that best descript the user
detailLink | Link to another page to show more details about the user
bio | 2 or 3 sentences to descript the user
socialMedia | a list of icon with clickable link to user's social media (attributes `link` and `ico`n are required) (icons need to be imported from `@fortawesome/free-brands-svg-icons`)

#### `user` object example
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
#### Possible Customized CSS Properties
Property | Description
------------ | -------------
cardBackgroundColor | background color of the bootstrap Card Component (default is `#FAF6F5`)
cardWidth | width of the bootstrap Card Component (default is `25rem`)
cardBorderColor | border color of the bootstrap Card Component (default is `#ed1c24`)
fontFamily | font of the content in the bootstrap Card Component (default is `Gotham Black, Helvetica Neue, Helvetica, Arial, sans-serif`)

## Commands
```
npm start // Invode the App component showed in the deploy link
npm test // Run test cases
```
## Future Improvement
1. Use the Reander Props Pattern to be more flexible
2. Simpify the test cases
