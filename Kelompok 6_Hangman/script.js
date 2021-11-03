const word = document.getElementById("word");
const incorrect = document.getElementById("incorrect");
const incorrectLettersEl = document.querySelector("#incorrect p");
const backdrop = document.getElementById("backdrop");
const finalMsg = document.getElementById("final-msg");
const msgInfo = document.getElementById("msg-info");
const playBtn = document.getElementById("play");
const indication = document.getElementById("indication");
const bodyParts = document.getElementsByClassName("body-part");
const getHint = document.getElementById("hint");
const showClue = document.getElementById("clue");

// List dari kata-kata
const wordList = [
  //animal
  "cat",
  "dog",
  "fish",
  "horse",
  "pig",
  "snake",
  "shrimp",
  //city
  "london",
  "bandung",
  "amsterdam",
  "vancouver",
  "rome",
  "jakarta",
  "paris",
  //color
  "blue",
  "red",
  "white",
  "black",
  "green",
  "pink",
  "yellow",
  //food
  "taco",
  "sushi",
  "pizza",
  "spaghetti",
  "pancake",
  "steak",
  "hamburger",
  //car brand
  "audi",
  "bmw",
  "bugatti",
  "ferrari",
  "chevrolet",
  "porsche",
  "bac",
  //planets
  "mars",
  "saturnus",
  "uranus",
  "neptunus",
  "jupiter",
  "venus",
  "mercury",
  //fruits
  "mango",
  "apple",
  "orange",
  "avocado",
  "banana",
  "watermelon",
  "papaya",
  //movies
  "avatar",
  "titanic",
  "jumanji",
  "cinderella",
  "coco",
  "joker",
  "interstellar",
  //seasons
  "summer",
  "spring",
  "autumn",
  "winter",
  "rainy",
  //sports
  "basketball",
  "volleyball",
  "soccer",
  "badminton",
  "golf",
  "tennis",
  "swimming",
  //occupations
  "doctor",
  "teacher",
  "architect",
  "chef",
  "nurse",
  "musician",
  "pilot",
  //brands
  "nike",
  "vans",
  "starbucks",
  "adidas",
  "mcdonalds",
  "unilever",
  "uniqlo",
  //transportations
  "train",
  "bus",
  "ship",
  "car",
  "motorcycle",
  "bicycle",
  "airplane",
  //music titles
  "hello",
  "closer",
  "chandelier",
  "payphone",
  "perfect",
  "reflection",
  "luxurious",
  //diseases
  "constipated",
  "diabetes",
  "ascariasis",
  "corona",
  "diarrhea",
  "gout",
  "asthma",
  //countries
  "indonesia",
  "philippines",
  "finland",
  "denmark",
  "india",
  "wakanda",
  "australia",
  //characters
  "thor",
  "spongebob",
  "hulk",
  "squidward",
  "galactus",
  "shrek",
  "dora",
  //landmarks
  "monas",
  "eiffel",
  "pisa",
  "colosseum",
  "sphinx",
  "versailles",
  "pompeii",
  //mountains
  "kilimanjaro",
  "fuji",
  "bromo",
  "everest",
  "mouaroa",
  "merapi",
  "kinabalu",
  //vegetables
  "lettuce",
  "carrot",
  "spinach",
  "kale",
  "broccoli",
  "tomato",
  "asparagus",
  //korean drama
  "vincenzo",
  "mouse",
  "nevertheless",
  "doctors",
  "pinnochio",
  "extracurricular",
  "penthouse",
  "hyacinth",
  //chinese drama
  "crush",
  "moonlight",
  //chinese film
  "shaolin",
  "vanguard",
  "rush",
  //flowers
  "chrysanthemum",
  "lily",
  "lavender",
  "orchid",
  "sunflower",
  "rose",
  //woods
  "acacia",
  "pine",
  "oak",
  "maple",
  "walnut",
  "redwood",
  "celtis",
  //board games
  "monopoly",
  "ludo",
  "scrabble",
  "twister",
  "chess",
  "battleship",
  "ljenga",
  //gems
  "quartz",
  "andalusite",
  "aquamarine",
  "ruby",
  "diamond",
  "emerald",
  "garnet",
  //clothes
  "shirt",
  "coat",
  "skirt",
  "hoodie",
  "sweater",
  "turtleneck",
  "dress",
  //operating system software
  "windows",
  "linux",
  "android",
  "fedora",
  "debian",
  "ubuntu",
  "centos",
  //zodiacs
  "pisces",
  "cancer",
  "capricorn",
  "libra",
  "virgo",
  "gemini",
  "leo",
  "aquarius",
  //vaccine
  "moderna",
  "pfizer",
  "astrazeneca",
  "sinovac",
  "biothrax",
  "polio",
  "pertussis",
  //elements
  "platinum",
  "helium",
  "sodium",
  "potassium",
  "neptunium",
  "carbon",
  "oxygen",
  //file format
  "pdf",
  "gif",
  "jpg",
  "png",
  "txt",
  "xlsx",
  "docx",
  //musicians
  "khalid",
  "adele",
  "sia",
  "shawn",
  "camila",
  "yangyang",
  "hailee",
  //utensils
  "fork",
  "skewer",
  "pan",
  "teapot",
  "freezer",
  "knife",
  "spoon",
];

// Kata yang terpilih
let selectedWord = null;

// Menyimpan jumlah dari huruf yang diketik salah
let incorrectCount = 0;

// Menyimpan huruf yang diketik benar
const correctLetters = [];

// Menyimpan huruf yang diketik salah
const incorrectLetters = [];

function initializeWord() {
  // Memilih kata secara acak dengan random
  selectedWord = wordList[Math.floor(Math.random() * wordList.length)];

  const noOfLetters = selectedWord.length;
  // Menambahkan kata yang telah terpilih dipecah menjadi huruf untuk di tebak
  for (let i = 0; i < noOfLetters; i++) {
    const listItem = document.createElement("li");
    listItem.classList.add("letter");
    word.append(listItem);
  }
}

hint.onclick = function () {
  const hints = [
    "animal",
    "animal",
    "animal",
    "animal",
    "animal",
    "animal",
    "animal",
    "city",
    "city",
    "city",
    "city",
    "city",
    "city",
    "city",
    "color",
    "color",
    "color",
    "color",
    "color",
    "color",
    "color",
    "food",
    "food",
    "food",
    "food",
    "food",
    "food",
    "food",
    "car brand",
    "car brand",
    "car brand",
    "car brand",
    "car brand",
    "car brand",
    "car brand",
    "planet",
    "planet",
    "planet",
    "planet",
    "planet",
    "planet",
    "planet",
    "fruit",
    "fruit",
    "fruit",
    "fruit",
    "fruit",
    "fruit",
    "fruit",
    "film",
    "film",
    "film",
    "film",
    "film",
    "film",
    "film",
    "season",
    "season",
    "season",
    "season",
    "season",
    "sport",
    "sport",
    "sport",
    "sport",
    "sport",
    "sport",
    "sport",
    "job",
    "job",
    "job",
    "job",
    "job",
    "job",
    "job",
    "brand",
    "brand",
    "brand",
    "brand",
    "brand",
    "brand",
    "brand",
    "transportation",
    "transportation",
    "transportation",
    "transportation",
    "transportation",
    "transportation",
    "transportation",
    "song",
    "song",
    "song",
    "song",
    "song",
    "song",
    "song",
    "disease",
    "disease",
    "disease",
    "disease",
    "disease",
    "disease",
    "disease",
    "country",
    "country",
    "country",
    "country",
    "country",
    "fictional country",
    "country",
    "character",
    "character",
    "character",
    "character",
    "character",
    "character",
    "character",
    "landmark",
    "landmark",
    "landmark",
    "landmark",
    "landmark",
    "landmark",
    "landmark",
    "mountain",
    "mountain",
    "mountain",
    "mountain",
    "mountain",
    "mountain",
    "mountain",
    "vegetable",
    "vegetable",
    "vegetable",
    "vegetable",
    "vegetable",
    "vegetable",
    "vegetable",
    "korean drama",
    "korean drama",
    "korean drama",
    "korean drama",
    "korean drama",
    "korean drama",
    "korean drama",
    "chinese drama",
    "chinese drama",
    "chinese film",
    "chinese film",
    "chinese film",
    "flower",
    "flower",
    "flower",
    "flower",
    "flower",
    "flower",
    "flower",
    "wood",
    "wood",
    "wood",
    "wood",
    "wood",
    "wood",
    "wood",
    "board game",
    "board game",
    "board game",
    "board game",
    "board game",
    "board game",
    "board game",
    "gems",
    "gems",
    "gems",
    "gems",
    "gems",
    "gems",
    "gems",
    "clothes",
    "clothes",
    "clothes",
    "clothes",
    "clothes",
    "clothes",
    "clothes",
    "operating system software",
    "operating system software",
    "operating system software",
    "operating system software",
    "operating system software",
    "operating system software",
    "operating system software",
    "zodiac",
    "zodiac",
    "zodiac",
    "zodiac",
    "zodiac",
    "zodiac",
    "zodiac",
    "zodiac",
    "vaccine",
    "vaccine",
    "vaccine",
    "vaccine",
    "vaccine",
    "vaccine",
    "vaccine",
    "element",
    "element",
    "element",
    "element",
    "element",
    "element",
    "element",
    "file format",
    "file format",
    "file format",
    "file format",
    "file format",
    "file format",
    "file format",
    "musician",
    "musician",
    "musician",
    "musician",
    "musician",
    "musician",
    "musician",
    "utensils",
    "utensils",
    "utensils",
    "utensils",
    "utensils",
    "utensils",
    "utensils",
  ];

  var wordIndex = wordList.indexOf(selectedWord);
  showClue.innerHTML = "<b>Clue : </b>" + hints[wordIndex];
};

// Menampilkan peringatan kata yang telah terpilih dari bawah
function displayIndication() {
  indication.classList.add("visible");

  setTimeout(() => {
    // Peringatan kata yang telah terpilih akan hilang dalam waktu 0.4 detik
    indication.classList.remove("visible");
  }, 400);
}

// Mengubah bentuk hangman ketika kata yang diketik salah
function updateFigure() {
  try {
    bodyParts[incorrectCount].style.display = "block";
    incorrectCount++;
  } catch (error) {}
}

// Muncul ketika permainan menang
function successState() {
  backdrop.classList.add("visible");
  finalMsg.classList.add("visible");
  msgInfo.textContent = "Hurrah! You won.";
}

// Muncul ketika permainan kalah
function failureState() {
  backdrop.classList.add("visible");
  finalMsg.classList.add("visible");
  msgInfo.textContent = `Oops! You lost. The right word is "${selectedWord}"`;
}

// Ganti Warna Background kalau Salah Huruf
function changeBodyBg(color) {
  document.body.style.background = "#e73c7e";

  setTimeout(changeBodyBg2, 400);
}

// Ganti Original Warna Background
function changeBodyBg2(color) {
  document.body.style.background =
    "linear-gradient(-45deg, #e73c7e, #ee7752, #23a6d5, #23d5ab)";
}

// Mengecek bahwa huruf yang diketik merupakan huruf dari kata yang terpilih
function check(ev) {
  const letterElements = document.querySelectorAll(".word .letter");
  const character = ev.key;

  // Handle keyboard events
  if (
    !backdrop.classList.contains("visible") &&
    !indication.classList.contains("visible") &&
    ev.keyCode >= 65 &&
    ev.keyCode <= 90
  ) {
    if (selectedWord.includes(character)) {
      if (correctLetters.includes(character)) {
        displayIndication(); // Menampilkan peringatan kata yang telah terpilih dari bawah
      } else {
        correctLetters.push(character);
        const indexes = [];
        [...selectedWord].forEach((value, index) => {
          if (value == character) {
            indexes.push(index); // Memasukkan huruf yang benar kedalam array
          }
        });
        indexes.forEach((value) => {
          letterElements[value].textContent = character;
        });
      }
    } else {
      if (incorrectLetters.includes(character)) {
        displayIndication(); // Menampilkan peringatan kata yang telah terpilih dari bawah
      } else {
        incorrectLetters.push(character); // Memasukkan huruf yang salah kedalam array
        if (!incorrect.classList.contains("visible")) {
          incorrect.classList.add("visible");
        }
        incorrectLettersEl.textContent = `${incorrectLetters.join(", ")}`;
        updateFigure();
        changeBodyBg();
      }
    }
  }

  // Membentuk suatu kata dari semua huruf
  let formedWord = "";
  letterElements.forEach((value) => {
    formedWord += value.textContent;
  });

  // Mengecek apakah kata yang terbentuk benar
  if (formedWord == selectedWord) {
    successState();
  }

  // Mengecek kondisi 'Hangman'
  if (incorrectCount >= 6) {
    failureState();
  }
}

// Me-reset semua variabel dan memulai permainan dari awal
function startNewGame() {
  selectedWord = null;
  incorrectCount = 0;
  correctLetters.splice(0);
  incorrectLetters.splice(0);
  word.innerHTML = "";
  Array.from(bodyParts).forEach((value) => {
    value.style.display = "none";
  });
  incorrect.classList.remove("visible");
  backdrop.classList.remove("visible");
  finalMsg.classList.remove("visible");
  showClue.innerHTML = "<b>Clue : </b>";
  initializeWord();
}

// Memulai permainan
initializeWord();

// Event Listeners
// Huruf yang diketik
window.addEventListener("keyup", check);
// Click untuk memulai game baru
playBtn.addEventListener("click", startNewGame);
