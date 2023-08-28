let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.008,
};

const setActive = (page) => {
  page.classList.add("border-[#007FFF]");
  page.classList.add("text-[#007FFF]");
};

const removeActive = (page) => {
  page.classList.remove("border-[#007FFF]");
  page.classList.remove("text-[#007FFF]");
};

let heightSizes = {};
let topSizes = {};
let callback = (entries, observer) => {
  entries.forEach((entry, index) => {
    let rect = entry.target.getBoundingClientRect();
    heightSizes = { ...heightSizes, [entry.target.id]: rect.height };
    topSizes = { ...topSizes, [entry.target.id]: rect.top };
    console.log(heightSizes, "sss");
    console.log(topSizes, "sss");
    console.log(entry);
    if (entry.target === allSections[0]) {
      if (entry.isIntersecting && rect.top < rect.height) {
        let page = document.querySelector("#page1");
        setActive(page);
      } else {
        let page = document.querySelector("#page1");
        removeActive(page);
      }
    } else if (entry.target === allSections[1]) {
      if (entry.isIntersecting) {
        let page = document.querySelector("#page2");
        setActive(page);
      } else {
        let page = document.querySelector("#page2");
        removeActive(page);
      }
    } else if (entry.target === allSections[2]) {
      if (entry.isIntersecting) {
        let page = document.querySelector("#page3");
        setActive(page);
      } else {
        let page = document.querySelector("#page3");
        removeActive(page);
      }
    }
  });
};

let observer = new IntersectionObserver(callback, options);
let allSections = document.querySelectorAll("section");
allSections.forEach((target) => {
  observer.observe(target);
});

// let allSections = document.querySelectorAll("section");
// allSections.forEach((target) => {
//   observer.observe(target);
// });

// let target1 = document.querySelector("#section-1");
// let target2 = document.querySelector("#section-2");
// let target3 = document.querySelector("#section-3");
// observer.observe(target1);
// observer.observe(target2);
// observer.observe(target3);
