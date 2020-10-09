# Retro-news-website

## Table of contents

- [Design Philosophy](https://github.com/ShubhamCanMakeCommit/hayagriva/tree/master/retro-news-website#design-philosophy)

## Design Philosophy

### Figma Component Hierarchy

Figma has it's own way of reusing styles called components and styles. In this section I am going to talk about the more interesting part. Whenever we make a basic button in figma we can copy and put on different places.

[You can view the figma file over here.](https://www.figma.com/file/LGRtJXAzn9Lnq8gpHtQEEc/Retro-News-website?node-id=6%3A3)

I am following the atomic design principles. So I have broken down the figma pages into atoms, molecules, templates and pages. Atoms are the basic fundamental building blocks. They can be font styles, color styles which are going to be reused again and again. They can be buttons and border boxes which are going to be resized or by doing some minor tweaks made into newer components called molecules. Like you may have a button with all styles and fonts defined. But we can derive several buttons out of it like primary, secondary etc. Not only that we can also derive different states of the button like hovered, active etc. which we will place inside the molecules folder.

Templates are the thing which are defined as some part of the page that gets repeated on other pages. Eg. the sidebar on each page but with different ads or content. The sidebar has in it buttons, text, etc.(molecules and atoms) but it is a part which gets reused often.
