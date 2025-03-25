# Frontend Mentor - Shortly URL Shortening API Challenge solution

This is a solution to the [Shortly URL Shortening API Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](./screenshots/desktop-active-states.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript (ES6+)
- Fetch API for API calls
- LocalStorage for persisting shortened links

### What I learned

This project helped me strengthen my understanding of working with external APIs, handling user input validation, and persisting data using LocalStorage. Below is an example of how I implemented the API call:

```js
async function shortenUrl(url) {
  const response = await fetch("https://cleanuri.com/api/v1/shorten", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ url }),
  });
  const data = await response.json();
  return data.result_url;
}
```

### Continued development

I plan to work more on:

- Adding a dark mode feature for better UI experience
- Allowing users to create custom short links
- Displaying analytics for each shortened link

### Useful resources

- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - Helped me understand how to fetch data from an API.
- [CSS-Tricks: Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Helped improve my layout structure.

## Author

- GitHub - [@Tianaah](https://github.com/Tianaah)
- Frontend Mentor - [@Tianaah](https://www.frontendmentor.io/profile/Tianaah)

## Acknowledgments

Thanks to Frontend Mentor for providing this challenge. It helped me improve my JavaScript skills and API handling.
