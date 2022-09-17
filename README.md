# Password-Generator

A small tool that generates passwords based on a defined length, and an option to include symbols, numbers, and uppercase or lowercase letters.

Design and idea: [@Scrimba](https://scrimba.com/learn/learnjavascript/solo-project-password-generator-cR9B46Sg)


## Table of contents

- [Overview]()
    - [The challenge]()
    - [Links]()
- [My process]()
    - [Technologies]()
    - [What I learned]()
    - [Road-map]()
- [Author]()


## Overview

### The challenge

The goal of the challenge is :

- Generate 2 distinct passwords
- Set the password's length to 8-20 characters long
- Add different characters such as numbers, symbols, and lowercase/uppercase characters 

### Links

- Live site:   [@GitHub](https://kopernix-ryanb.github.io/Password-Generator/)
- Source code: [@GitHub](https://github.com/Kopernix-RyanB/Password-Generator)


## My process

### Technologies

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript
- Git

### What I learned

- To stay true to Scrimba's example, I had to separate each section of characters(uppercase chars, lowercase chars ...) into smaller arrays containing these characters. That's done with a function that takes the index of the first and the last character as start and end points, and loops over all the indexes in between.(1)

- At the click of the "Generate" button, an event listener function stores all uniquely generated passwords into an array "password", and displays them.

- When one of the checkboxes is checked, its array of values is concatenated into an array containing all desired characters.


### Road-map

- Implement Dark-mode / Light-mode 
- Add mobile support
- Add copy on click feature


## Author

- LinkedIn Profile - [Ryan](https://www.linkedin.com/in/ryan-bannout-637bb9236/)

