document.addEventListener("DOMContentLoaded", function(event) { 
  console.log("hello world");

  var index = 0;

  const slides = document.querySelector(".slides");
  const imageContainer = document.querySelector(".slide-image");
  const imageMobileContainer = document.querySelector(".slide-image-mobile");
  const slideContent = document.querySelector(".slide-content");
  const textContainer = document.querySelector(".slide-text");
  const titleContainer = document.querySelector(".slide-title");

  const content = [{ 
      title: "Discover innovative ways to decorate",
      text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      img: "./images/desktop-image-hero-1.jpg",
      imgMobile: "./images/mobile-image-hero-1.jpg",
    },
    { 
      title: "We are available all across the globe",
      text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      img: "./images/desktop-image-hero-2.jpg",
      imgMobile: "./images/mobile-image-hero-2.jpg",
    },
    { 
      title: "Manufactured with the best materials",
      text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      img: "./images/desktop-image-hero-3.jpg",
      imgMobile: "./images/mobile-image-hero-3.jpg",
    }];
  console.log(content);

  const right = document.querySelector("#button-right");
  const left = document.querySelector("#button-left");

  left.addEventListener("click", function(event){
    reduce();
  });

  right.addEventListener("click", function(event){
    increase();
  });

  document.addEventListener('keydown', function(event) {
      if(event.keyCode == 37) {
        reduce();
      }
      else if(event.keyCode == 39) {
        increase();
      }
  });

  const reduce = () => {
    index--;
    if(index < 0){
      index = content.length - 1;
    }
    addContent(index);
  }

  const increase = () => {
    index++;
    if(index > content.length - 1){
      index = 0;
    }
    addContent(index);
  }


  const addContent = (i) => {
    console.log(imageContainer);
    imageContainer.classList.add("opacity-0");
    imageMobileContainer.classList.add("opacity-0");
    textContainer.classList.add("opacity-0");
    titleContainer.classList.add("opacity-0");
    setTimeout(() => {
      imageContainer.src = content[i].img;
      imageMobileContainer.src = content[i].imgMobile;
      textContainer.innerHTML = content[i].text;
      titleContainer.innerHTML = content[i].title;
      imageContainer.classList.remove("opacity-0");
      imageMobileContainer.classList.remove("opacity-0");
      textContainer.classList.remove("opacity-0");
      titleContainer.classList.remove("opacity-0");
    }, 250);
  }

  // addContent(0);
});

