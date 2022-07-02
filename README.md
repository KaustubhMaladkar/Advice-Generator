# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users can:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

Desktop
![image](https://user-images.githubusercontent.com/74300302/176998890-5de356a0-3994-4e57-983d-7379bdc4436c.png)

Mobile
![image](https://user-images.githubusercontent.com/74300302/176998931-02c27681-2cc7-4bd7-87d2-d7201d640e75.png)

### Links

- Solution URL: [Advice Generator using Advice Slip API](https://www.frontendmentor.io/solutions/advice-generator-using-advice-slip-api-JM-FRmxeC6)
- Live Site URL: [Advice generator](https://kaustubhmaladkar.github.io/Advice-Generator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

```html
<img src="./images/pattern-divider-desktop.svg" alt="divider"
          srcset="./images/pattern-divider-mobile.svg 295w, ./images/pattern-divider-desktop.svg 444w"
          sizes="(max-width: 375px) 295px, 444px">
```
```css
randomElement {
    position: relative;
    top: 30px;
    box-shadow: 10px 10px 60px 11px rgba(82, 255, 168, 0.80);
}
```
```js
then(advice => advice.json())
```

### Useful resources

- [CSS Position Relative vs Position Absolute](https://kolosek.com/css-position-relative-vs-position-absolute/)
- [box-shadow - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

## Author

- Website - https://github.com/KaustubhMaladkar/KaustubhMaladkar
- Frontend Mentor - [@Kaustubh Maladkar](https://www.frontendmentor.io/profile/KaustubhMaladkar)
