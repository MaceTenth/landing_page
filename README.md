The project is designed to demonstrate what a landing page whose content is dynamically created looks like. What is important to note is that the top menu contents are not preset but are dynamically added to the nav tag so that every time you add a section, a new item is added to the menu.

The most important thing this project demonstrates is the concepts of Throttling and Debouncing. In this article: https://css-tricks.com/debouncing-throttling-explained-examples/
you can read that a scrolling event creates a lot of events for the browser, 30-40 on a desktop computer and 100 on mobile. So if we do not limit the number of times the event is created, it will significantly burden the user experience, and the site will behave heavily and slowly. The entire scrolling event is within setTimeOut, so it is limited in the number of times it works. Also, if the user does not scroll, the events stop completely.

You can see some more exciting things like changing a menu's position and behavior using JavaScript with transform and translate properties.
https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate()
