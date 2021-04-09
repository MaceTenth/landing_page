const sections = document.querySelectorAll("section");

let dynamicMenu = document.querySelector("ul");

let ulHTML = "";

//This loop creates the li items dynamicaly by iterating over
//the section and accsesing their id and also the a tags(links)

for (let index = 0; index < sections.length; index++) {
  ulHTML += `<li><a href="#${sections[index].id}">${sections[index].id}</a></li>`;
}

//This line appends the above markup to the ul element
dynamicMenu.innerHTML = ulHTML;

let navList = document.querySelectorAll("nav .container ul li");

let links = document.querySelectorAll("nav .container ul li a");

let navbar = document.querySelector("nav");

//this variable is designated to track user scrolling
//I have seen that when scrolling through a document a lot
//of events are created and using this function I limit the
//amount of operations per second, I hope my application is correct.

let scrolling;

window.addEventListener(
  "scroll",
  function (event) {
    window.clearTimeout(scrolling);

    scrolling = setTimeout(function () {
      // This condition checks the position of the screen because there is
      // a movement of the menu and I do not want it to happen in mobile mode
      // or when the user has not started to scroll
      //=============================================================
      //Note that the scrolling is done with .scrollIntoView() and not the
      //link tag, to check that I remove the line scrollToSection.scrollIntoView(true)
      //and consoled log 'event prevented' (which is now commented) instead of the
      //line that is in charge of the scrolling.

      links.forEach((link) => {
        link.addEventListener("click", function (event) {
          event.preventDefault();
          let scrollToSection = document.getElementById(
            `${link.innerText.toLowerCase()}`
          );
          // console.log("event prevented");
          scrollToSection.scrollIntoView(true);
        });
      });

      if (window.pageYOffset === 0 || window.screen.width < 500) {
        navbar.style.transform = "none";
        navbar.style.transformOrigin = "none";
      } else {
        //This variable is designed to keep the current section visible on the screen
        let currentSection = "";

        //The menu changes position and becomes a kind of bookmark in a book
        //this where the inspiration came from

        if (window.pageYOffset > window.pageYOffset / 2) {
          navbar.style.transform = "rotate(90deg) translate(-50px, -10px)";
          navbar.style.transformOrigin = "left bottom";
        }

        // This loop checks whether the height of the section (the top part)
        // is equal to the distance the user have scrolled so far, then an "active" class
        // is added if the id matches the content of the section

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;

          if (pageYOffset >= sectionTop - 50) {
            currentSection = section.getAttribute("id");
          }
          navList.forEach((item) => {
            item.classList.remove("active");

            if (item.textContent.toLowerCase() === currentSection) {
              item.classList.add("active");
            }
          });
        });
      }
    }, 10);
  },
  false
);
