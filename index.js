const links = document.querySelectorAll("a");
const defaultBanner = document.getElementById("default-banner");
const paniPuriBanner = document.getElementById("pani-puri-banner");
const samosaChaatBanner = document.getElementById("samosa-chaat-banner");
const churmurChaatBanner = document.getElementById("churmur-chaat-banner");
const bannerArray = document.querySelectorAll(".link");
const paniPuriText = document.getElementById("pani-puri-text");
const samosaText = document.getElementById("samosa-text");
const churmurText = document.getElementById("churmur-text");
const defaultText = document.getElementById("default-text");
const textArray = document.querySelectorAll(".dev-box > p");

links.forEach((link) => {
  link.addEventListener("mouseover", (e) => {
    defaultBanner.classList.remove("active");
    defaultText.classList.remove("active");
    switch (e.target.alt) {
      case "Pani Puri":
        paniPuriBanner.classList.add("active");
        paniPuriText.classList.add("active");
        break;
      case "Samosa Chaat":
        samosaChaatBanner.classList.add("active");
        samosaText.classList.add("active");
        break;
      case "Churmur Chaat":
        churmurChaatBanner.classList.add("active");
        churmurText.classList.add("active");
        break;
      default:
        console.log("idk what happened");
        break;
    }
  });
  link.addEventListener("mouseout", (e) => {
    bannerArray.forEach((banner) => {
      banner.classList.remove("active");
    });
    textArray.forEach((banner) => {
      banner.classList.remove("active");
    });
    defaultBanner.classList.add("active");
    defaultText.classList.add("active");
  });
});
