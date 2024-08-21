// Tailwind config
tailwind.config = {
  theme: {
    extend: {
      colors: {
        lite_cyan: "hsl(193, 38%, 86%)",
        neon_green: "hsl(150, 100%, 66%)",
        grayish_blue: "hsl(217, 19%, 38%)",
        drk_gray_blue: "hsl(217, 19%, 24%)",
        drk_blue: "hsl(218, 23%, 16%)",
      },
      fontFamily: {
        sans: "Manrope",
      },
      fontSize: {
        quote: "1.75rem",
      },
    },
  },
};

// API
// HTML
const pausePlayBtn = document.getElementById("pause-play");
const randomBtn = document.getElementById("random");
const quote = document.getElementById("quote");
const number = document.getElementById("number");

// URL
const url = "https://api.adviceslip.com/advice";

// fetch data
const fetchQuote = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const renderAdvice = (obj) => {
  const { id, advice } = obj;
  quote.textContent = `${advice}`;
  number.textContent = `${id}`;
};

const generateNewAdvice = async () => {
  const data = await fetchQuote();
  const advice = data.slip;

  renderAdvice(advice);
};

window.addEventListener("DOMContentLoaded", () => {
  generateNewAdvice();
  randomBtn.addEventListener("click", generateNewAdvice);
});
