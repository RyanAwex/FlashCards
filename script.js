import { data as wordData } from "./data.js";

const wordEl = document.getElementById("word-el");
const translationEl = document.getElementById("translation-el");
const translationBtn = document.getElementById("translation-btn");
const mainBtn = document.getElementById("main-btn");
const newBtn = document.getElementById('new-btn');
const inputGerman = document.getElementById('input-german');
const inputArabic = document.getElementById('input-arabic');
const saveBtn = document.getElementById('save-btn');
 
 
let currentIndex = 0;

mainBtn.addEventListener("click", () => {
  if (currentIndex < wordData.length) {
    wordEl.style.display = "block";
    translationBtn.style.display = "block";
    newBtn.style.display = "block";
    wordEl.textContent = wordData[currentIndex].word;
    translationEl.textContent = wordData[currentIndex].translation;
    currentIndex++;
    mainBtn.textContent = 'New FlashCard?'
  } else {
    currentIndex = 0;
  }
});

translationBtn.addEventListener('click', () => {
  if (translationBtn.innerText === 'Show translation') {
    translationBtn.textContent = 'Hide translation'
    translationEl.style.display = "block";
    currentIndex++
  } else if (translationBtn.innerText === 'Hide translation') {
    translationEl.style.display = "none";
    translationBtn.textContent = 'Show translation'
  }
})

newBtn.addEventListener('click', () => {
  inputGerman.style.display = "block";
  inputArabic.style.display = "block";
  saveBtn.style.display = 'block';
  wordEl.style.display = "none";
  translationEl.style.display = "none";
  translationBtn.style.display = "none";
  mainBtn.style.display = "none";
  newBtn.style.display = 'none';
})

saveBtn.addEventListener('click', () => {
  let germanNewWord = '';
  let arabicNewWord = '';

  germanNewWord += inputGerman.value
  arabicNewWord += inputArabic.value

  wordData.push({
    word: germanNewWord,
    translation: arabicNewWord
  })
  console.log(wordData);

  inputGerman.style.display = "none";
  inputArabic.style.display = "none";
  saveBtn.style.display = 'none';
  wordEl.style.display = "block";
  translationBtn.style.display = "block";
  mainBtn.style.display = "block";
  newBtn.style.display = 'block';
})