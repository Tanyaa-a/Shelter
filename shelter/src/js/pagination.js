const animalArray = [
    {
      id: 1,
      name: "Jennifer",
      img: "../src/asssets/images/card.png",
      type: "Dog",
      breed: "Labrador",
      description:
        "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: "2 months",
      inoculations: "none",
      diseases: "none",
      parasites: "none",
    },
    {
      id: 2,
      name: "Sophia",
      img: "../src/asssets/images/5_card.png",
      type: "Dog",
      breed: "Shih tzu",
      description:
        "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      age: "1 month",
      inoculations: "parvovirus",
      diseases: "none",
      parasites: "none",
    },
    {
      id: 3,
      name: "Woody",
      img: "../src/asssets/images/3_card.png",
      type: "Dog",
      breed: "Golden Retriever",
      description:
        "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      age: "3 years 6 months",
      inoculations: "adenovirus distemper",
      diseases: "right back leg mobility reduced",
      parasites: "none",
    },
    {
      id: 4,
      name: "Scarlett",
      img: "../src/asssets/images/7_card.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description:
        "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      age: "3 months",
      inoculations: "parainfluenza",
      diseases: "none",
      parasites: "none",
    },
    {
      id: 5,
      name: "Katrine",
      img: "../src/asssets/images/1_card.png",
      type: "Cat",
      breed: "British Shorthair",
      description:
        "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      age: "6 months",
      inoculations: "panleukopenia",
      diseases: "none",
      parasites: "none",
    },
    {
      id: 6,
      name: "Timmy",
      img: "../src/asssets/images/4_card.png",
      type: "Cat",
      breed: "British Shorthair",
      description:
        "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      age: "2 years 3 months",
      inoculations: "calicivirus, viral rhinotracheitis",
      diseases: "kidney stones",
      parasites: "none",
    },
    {
      id: 7,
      name: "Freddie",
      img: "../src/asssets/images/8_card.png",
      type: "Cat",
      breed: "British Shorthair",
      description:
        "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      age: "2 months",
      inoculations: "rabies",
      diseases: "none",
      parasites: "none",
    },
    {
      id: 8,
      name: "Charly",
      img: "../src/asssets/images/6_card.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description:
        "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      age: "8 years",
      inoculations: "bordetella bronchiseptica, leptospirosis",
      diseases: "deafness, blindness",
      parasites: "lice, fleas",
    },
  ];
    
function getRandomSubarray(arr, count) {
    let arrSlice = arr.slice(0);
    let i = arr.length;
    let min = i - count;
    let template;
    let index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        template = arrSlice[index];
        arrSlice[index] = arrSlice[i];
        arrSlice[i] = template;
    }
    return arrSlice.slice(min);
}
  
document.addEventListener("DOMContentLoaded", createCards);
  
let wrapperArray = [];
for (let i = 0; i < 6; i++) {
    wrapperArray.push(getRandomSubarray(animalArray, 8));
}
  
let currentWrapper = wrapperArray.flat();
  
function createCards() {
    cards.forEach((item, index) => currentCard(item, index));
}
  
function currentCard(currentCard, index) {
    if (index < 8) {
        let img = currentCard.querySelector(".img__card");
        let headLine = currentCard.querySelector(".card__title");
        let currentPet = currentWrapper[index];
        img.src = currentPet["img"];
        headLine.innerText = currentPet["name"];
        currentCard.id = currentPet["id"];
    }
}
  
let indexPage = 1;
let tmpIndex = indexPage;
let currentPage = document.querySelector(".current_btn");
let nextBtn = document.querySelector(".right_btn");
let dubleNextBtn = document.querySelector(".duble-right_btn");
let prevBtn = document.querySelector(".left_btn");
let dublePrevBtn = document.querySelector(".duble-left_btn");
  
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 981) {
      if (indexPage >= 7) {
        indexPage = 6
        tmpIndex = 6;
        currentPage.innerHTML = tmpIndex;
        nextBtn.disable = true;
        nextBtn.classList.add("disable");
        dubleNextBtn.disable = true;
        dubleNextBtn.classList.add("disable");
      }
      if (indexPage == 6) {
        nextBtn.disable = true;
        nextBtn.classList.add("disable");
        dubleNextBtn.disable = true;
        dubleNextBtn.classList.add("disable");
      }
    }
    if (window.innerWidth <= 980 && window.innerWidth >= 768) {
      console.log(indexPage)
      if (indexPage >= 9) {
        indexPage = 8
        tmpIndex = 8;
        currentPage.innerHTML = tmpIndex;
        nextBtn.disable = true;
        nextBtn.classList.add("disable");
        dubleNextBtn.disable = true;
        dubleNextBtn.classList.add("disable");
      }
      if (indexPage == 6) {
        nextBtn.disable = false;
        nextBtn.classList.remove("disable");
        dubleNextBtn.disable = false;
        dubleNextBtn.classList.remove("disable");
      }
      if (indexPage == 8) {
        nextBtn.disable = true;
        nextBtn.classList.add("disable");
        dubleNextBtn.disable = true;
        dubleNextBtn.classList.add("disable");
      }
    }
    if (window.innerWidth < 768) {
      if (indexPage == 6 || indexPage == 8) {
        nextBtn.disable = false;
        nextBtn.classList.remove("disable");
        dubleNextBtn.disable = false;
        dubleNextBtn.classList.remove("disable");
      }
    }
  });
  
  function nextPage(currentCard, index, max) {
    if (index < max) {
      let img = currentCard.querySelector(".img__card");
      let headLine = currentCard.querySelector(".card__title");
      let pageData = (indexPage - 1) * max;
      let currentPet = currentWrapper[index + pageData];
      img.src = currentPet["img"];
      headLine.innerText = currentPet["name"];
      currentCard.id = currentPet["id"];
    }
  }
  
  function createNextCard(max) {
    cards.forEach((item, index) => nextPage(item, index, max));
  }
  
  function nextbtnLength(length) {
    if (indexPage >= 2) {
      prevBtn.disable = false;
      prevBtn.classList.remove("disable");
      dublePrevBtn.disable = false;
      dublePrevBtn.classList.remove("disable");
    } else {
      prevBtn.disable = true;
      prevBtn.classList.add("disable");
      dublePrevBtn.disable = true;
      dublePrevBtn.classList.add("disable");
    }
    if (indexPage < length) {
      nextBtn.disable = false;
      nextBtn.classList.remove("disable");
      dubleNextBtn.disable = false;
      dubleNextBtn.classList.remove("disable");
    } else {
      nextBtn.disable = true;
      nextBtn.classList.add("disable");
      dubleNextBtn.disable = true;
      dubleNextBtn.classList.add("disable");
    }
  }
  
  nextBtn.addEventListener("click", () => {
    if (window.innerWidth > 980) {
      indexPage++;
      if (indexPage <= 6) {
        let currentMax = 8;
        let currentLength = 6;
        createNextCard(currentMax);
        currentPage.innerHTML = indexPage;
        nextbtnLength(currentLength);
      }
    }
    if (window.innerWidth >= 768 && window.innerWidth <= 980) {
      indexPage++;
      if (indexPage <= 8) {
        let currentMax = 6;
        let currentLength = 8;
        createNextCard(currentMax);
        currentPage.innerHTML = indexPage;
        nextbtnLength(currentLength);
      }
    }
    if (window.innerWidth < 768) {
      indexPage++;
      if (indexPage <= 16) {
        let currentMax = 3;
        let currentLength = 16;
        createNextCard(currentMax);
        nextbtnLength(currentLength);
        currentPage.innerHTML = indexPage;
      }
    }
  });
  
  dubleNextBtn.addEventListener("click", () => {
    if (window.innerWidth > 980) {
      indexPage = 6;
      if (indexPage == 6) {
        let currentMax = 8;
        let currentLength = 6;
        createNextCard(currentMax);
        nextbtnLength(currentLength);
        currentPage.innerHTML = indexPage;
      }
    }
    if (window.innerWidth >= 768 && window.innerWidth <= 980) {
      indexPage = 8;
      if (indexPage == 8) {
        let currentMax = 6;
        let currentLength = 8;
        createNextCard(currentMax);
        nextbtnLength(currentLength);
        currentPage.innerHTML = indexPage;
      }
    }
    if (window.innerWidth < 768) {
      indexPage = 16;
      if (indexPage == 16) {
        let currentMax = 3;
        let currentLength = 16;
        createNextCard(currentMax);
        nextbtnLength(currentLength);
        currentPage.innerHTML = indexPage;
      }
    }
  });
  
  prevBtn.addEventListener("click", () => {
    if (window.innerWidth > 980) {
      indexPage--;
      if (indexPage >= 1) {
        if (indexPage >= 6) {
          indexPage = 5;
        }
        let currentMax = 8;
        let currentLength = 6;
        createNextCard(currentMax);
        nextbtnLength(currentLength)
        currentPage.innerHTML = indexPage;
      }
    }
    if (window.innerWidth >= 768 && window.innerWidth <= 980) {
      indexPage--;
      if (indexPage >= 1) {
        if (indexPage >= 8) {
          indexPage = 7;
        }
        let currentMax = 6;
        let currentLength = 8;
        createNextCard(currentMax);
        nextbtnLength(currentLength)
        currentPage.innerHTML = indexPage;
      }
    }
    if (window.innerWidth < 768) {
      indexPage--;
      if (indexPage >= 1) {
        let currentMax = 3;
        let currentLength = 16;
        createNextCard(currentMax);
        nextbtnLength(currentLength)
        currentPage.innerHTML = indexPage;
  
      }
    }
  });
  
  dublePrevBtn.addEventListener("click", () => {
    if (window.innerWidth > 980) {
      indexPage = 1;
      if (indexPage == 1) {
        let currentMax = 8;
        let currentLength = 6;
        createNextCard(currentMax);
        nextbtnLength(currentLength)
        currentPage.innerHTML = indexPage;
      }
    }
    if (window.innerWidth >= 768 && window.innerWidth <= 980) {
      indexPage = 1;
      if (indexPage == 1) {
        let currentMax = 6;
        let currentLength = 8;
        createNextCard(currentMax);
        nextbtnLength(currentLength)
        currentPage.innerHTML = indexPage;
      }
    }
    if (window.innerWidth < 768) {
      indexPage = 1;
      if (indexPage == 1) {
        let currentMax = 3;
        let currentLength = 16;
        createNextCard(currentMax);
        nextbtnLength(currentLength)
        currentPage.innerHTML = indexPage;
      }
    }
  });
  
  const cards = document.querySelectorAll(".card");
  const popUp = document.querySelector(".pop-up_wrapper");
  const popBtn = document.querySelector(".pop-up-btn");
  const petsImg = document.querySelector(".pop-up_img");
  const petsName = document.querySelector(".pets_name");
  const petsType = document.querySelector(".pets_type");
  const petsOfText = document.querySelector(".pets_text");
  const currentAge = document.querySelector(".current_age");
  const currentInoculations = document.querySelector(".current_inoculations");
  const currentDiseases = document.querySelector(".current_diseases");
  const currentParasites = document.querySelector(".current_parasites");
  
  for (let card of cards) {
    card.addEventListener("click", function () {
      for (let item of currentWrapper) {
        if (this.id == item["id"]) {
          petsImg.src = item["img"];
          petsName.innerText = item["name"];
          petsType.innerText = `${item["type"]} - ${item["breed"]}`;
          petsOfText.innerText = item["description"];
          currentAge.innerText = item["age"];
          currentInoculations.innerText = item["inoculations"];
          currentDiseases.innerText = item["diseases"];
          currentParasites.innerText = item["parasites"];
        }
      }
      if (popUp.classList.toggle("open")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });
  }
  
  popBtn.addEventListener("click", function () {
    if (popUp.classList.toggle("open")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });
  
  popUp.addEventListener("click", function (event) {
    if (
      popUp.classList == "pop-up_wrapper open" &&
      event.target.classList == "pop-up_wrapper open"
    ) {
      if (popUp.classList.toggle("open")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  });