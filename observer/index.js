document.querySelector(".active").classList.add("border-[#007FFF]");
document.querySelector(".active").classList.add("text-[#007FFF]");

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.99,
};

const setActive = (page) => {
  page.classList.add("active");
  page.classList.add("border-[#007FFF]");
  page.classList.add("text-[#007FFF]");
};
const removeActive = () => {
  document.querySelector(".active").classList.remove("border-[#007FFF]");
  document.querySelector(".active").classList.remove("text-[#007FFF]");
  document.querySelector(".active").classList.remove("active");
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    // verify the element is intersecting
    if (entry.isIntersecting && entry.intersectionRatio > 0.99) {
      removeActive();
      let page = document.querySelector(`#page${entry.target.id.substring(8)}`);
      setActive(page);
    }
  });
};

let observer = new IntersectionObserver(callback, options);
let allSections = document.querySelectorAll("section");
allSections.forEach((target) => {
  observer.observe(target);
});
