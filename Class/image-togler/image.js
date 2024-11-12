const image = document.querySelector("img");

function imageToggler() {
  let isTrue = false;

  setInterval(() => {
    if (isTrue) {
      image.setAttribute(
        "src",
        "book2.jpeg"
      );
    } else {
      image.setAttribute(
        "src",
        "flower.jpeg"
      );
    }
    isTrue = !isTrue;
  }, 1000);
}
imageToggler();