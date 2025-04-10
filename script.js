// UI Class: Handles DOM manipulation and user interface updates
class UI {
  static grammarSelect = document.getElementById("grammar-type");
  static difficultySelect = document.getElementById("difficulty-level");
  static passageText = document.getElementById("passage-text");
  static wordBox = document.getElementById("word-box");
  static feedbackDisplay = document.getElementById("feedback");
  static nextPassageButton = document.getElementById("next-btn");
  static prevPassageButton = document.getElementById("prev-btn");
  static hintButton = document.getElementById("hint-btn");
  static clearButton = document.getElementById("clear-btn");
  static shareButton = document.getElementById("share-btn");
  static readPassageButton = document.getElementById("read-passage-btn");
  static toggleChallengeButton = document.getElementById("toggle-challenge");
  static progressDisplay = document.getElementById("progress");
  static scoreDisplay = document.getElementById("score");
  static starsDisplay = document.getElementById("stars");
  static timerDisplay = document.getElementById("timer");
  static progressBar = document.getElementById("progress-bar");
  static timerBar = document.getElementById("timer-bar");
  static levelDisplay = document.getElementById("level");
  static toggleThemeButton = document.getElementById("toggle-theme");
  static timerSettingSelect = document.getElementById("timer-setting");
  static storylineModal = document.getElementById("storyline-modal");
  static storylineText = document.getElementById("storyline-text");
  static startQuestButton = document.getElementById("start-quest");
  static toggleDyslexiaButton = document.getElementById("toggle-dyslexia");
  static textSizeSlider = document.getElementById("text-size-slider");
  static sidebarToggle = document.getElementById("sidebar-toggle");

  static speak(text) {
    if (!window.responsiveVoice) {
      this.feedbackDisplay.textContent = "Text-to-speech not supported in this browser.";
      return;
    }
    window.responsiveVoice.speak(text, "UK English Female", { rate: 0.9, pitch: 1.1 });
  }

  static showFeedback(text, color) {
    this.feedbackDisplay.textContent = text;
    this.feedbackDisplay.style.backgroundColor = color === "green" ? "#e8f5e9" : color === "red" ? "#ffe6e6" : "#e0f7fa";
    this.feedbackDisplay.style.color = "#2c3e50";
  }

  static updateStatus(game) {
    this.scoreDisplay.textContent = `Score: ${game.score}`;
    this.starsDisplay.textContent = `Stars: ${game.stars}`;
    this.progressDisplay.textContent = `Progress: ${game.currentPassageIndex + 1} / ${window.passages[game.currentGrammarType][game.currentDifficulty].length}`;
    this.timerDisplay.textContent = `Time: ${game.timeLeft}s`;
    this.progressBar.style.width = `${((game.currentPassageIndex + 1) / window.passages[game.currentGrammarType][game.currentDifficulty].length) * 100}%`;
    if (game.challengeMode && this.timerSettingSelect.value !== "off") {
      this.timerBar.style.width = `${(game.timeLeft / parseInt(this.timerSettingSelect.value)) * 100}%`;
      this.timerBar.style.backgroundColor =
        game.timeLeft > (parseInt(this.timerSettingSelect.value) * 0.5)
          ? "#27ae60"
          : game.timeLeft > (parseInt(this.timerSettingSelect.value) * 0.2)
          ? "orange"
          : "red";
    } else {
      this.timerBar.style.width = "0%";
    }
    game.updateLevel();
    this.levelDisplay.textContent = `Level: ${game.level}`;
  }

  static updateDifficultySelect(difficulty) {
    this.difficultySelect.value = difficulty;
  }

  static displayPassage(game) {
    clearInterval(game.timerInterval);
    game.hintUsage = {};
    game.selectedWord = null;

    const passage = window.passages[game.currentGrammarType][game.currentDifficulty][game.currentPassageIndex] || {
      text: "Welcome to Grammar Cloze Adventure! Select a grammar type and difficulty to begin.",
      wordBox: [],
      answers: [],
      clueWords: [],
      hints: []
    };

    let passageHTML = `<p class="narrative-intro">${getNarrativeIntro(game.currentGrammarType, game.currentPassageIndex)}</p>`;
    passageHTML += passage.text;

    if (passage.clueWords) {
      passage.clueWords.forEach((clues, index) => {
        const blankNum = index + 1;
        clues.forEach(clue => {
          const regex = new RegExp(`\\b${clue}\\b`, "gi");
          passageHTML = passageHTML.replace(regex,
            `<span class="keyword keyword-${blankNum}" title="Clue for blank ${blankNum}">${clue}</span>`);
        });
      });
    }

    passageHTML = passageHTML.replace(/___\((\d+)\)___/g, (_, num) => {
      return `<span class="blank-container">
                <span class="blank" data-blank="${num}" tabindex="0">_</span>
                <button class="hint-for-blank" data-blank="${num}" aria-label="Hint for blank ${num}">💡</button>
              </span>`;
    });

    this.passageText.innerHTML = passageHTML;

    this.wordBox.innerHTML = shuffle([...passage.wordBox])
      .map(word => `<div class="word" draggable="true" tabindex="0" aria-label="Word: ${word}">${word}</div>`)
      .join("");

    // Event listeners for drag-and-drop and tap-to-place
    this.wordBox.addEventListener("click", (e) => {
      if (e.target.classList.contains("word")) {
        game.selectedWord = e.target;
        document.querySelectorAll(".word").forEach(w => w.classList.remove("selected"));
        e.target.classList.add("selected");
      }
    });

    document.querySelectorAll(".blank").forEach(blank => {
      blank.addEventListener("click", () => {
        if (game.selectedWord && !blank.classList.contains("filled")) {
          placeWord(blank, game.selectedWord.textContent, passage, game);
          game.selectedWord.classList.remove("selected");
          game.selectedWord = null;
          UI.updateStatus(game);
        }
      });
    });

    if (game.challengeMode) game.startTimer();
    UI.updateStatus(game);
  }
}

// Game Class: Handles game logic, progress tracking, and timer
class Game {
  constructor() {
    this.currentGrammarType = "prepositions";
    this.currentDifficulty = "P1";
    this.currentPassageIndex = 0;
    this.score = 0;
    this.stars = 0;
    this.hintUsage = {};
    this.selectedWord = null;
    this.timeLeft = 60;
    this.timerInterval = null;
    this.challengeMode = true;
    this.level = "Apprentice";
    this.performanceHistory = JSON.parse(localStorage.getItem("performanceHistory")) || [];
    this.accuracy = 0;
  }

  updateLevel() {
    if (this.score < 100) {
      this.level = "Apprentice";
    } else if (this.score < 200) {
      this.level = "Journeyman";
    } else {
      this.level = "Master Wizard";
    }
  }

  saveProgress(correct, total) {
    const accuracy = (correct / total) * 100;
    this.performanceHistory.push({
      grammarType: this.currentGrammarType,
      difficulty: this.currentDifficulty,
      passageIndex: this.currentPassageIndex,
      score: this.score,
      stars: this.stars,
      accuracy: accuracy,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem("performanceHistory", JSON.stringify(this.performanceHistory));
  }

  adjustDifficulty() {
    if (this.performanceHistory.length >= 5) {
      const recent = this.performanceHistory.slice(-5);
      const avg = recent.reduce((sum, entry) => sum + entry.accuracy, 0) / recent.length;
      if (avg > 80 && this.currentDifficulty !== "P3") {
        this.currentDifficulty = this.currentDifficulty === "P1" ? "P2" : "P3";
        UI.updateDifficultySelect(this.currentDifficulty);
        UI.showFeedback(`Great job! Moving to ${this.currentDifficulty} difficulty.`, "green");
        UI.speak(`Great job! Moving to ${this.currentDifficulty} difficulty.`);
      } else if (avg < 50 && this.currentDifficulty !== "P1") {
        this.currentDifficulty = this.currentDifficulty === "P3" ? "P2" : "P1";
        UI.updateDifficultySelect(this.currentDifficulty);
        UI.showFeedback(`Let's try ${this.currentDifficulty} difficulty to build your skills.`, "blue");
        UI.speak(`Let's try ${this.currentDifficulty} difficulty to build your skills.`);
      }
    }
  }

  startTimer() {
    if (!this.challengeMode || UI.timerSettingSelect.value === "off") return;
    clearInterval(this.timerInterval);
    this.timeLeft = parseInt(UI.timerSettingSelect.value);
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      UI.updateStatus(this);
      if (this.timeLeft <= 0) {
        clearInterval(this.timerInterval);
        UI.showFeedback("Time's up! Moving to next passage.", "red");
        UI.speak("Time's up! Moving to next passage.");
        setTimeout(() => UI.nextPassageButton.click(), 1000);
      }
    }, 1000);
  }
}

// Helper Functions
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function placeWord(blank, word, passage, game) {
  const blankNum = blank.dataset.blank;
  blank.textContent = word;
  blank.classList.add("filled");
  const isCorrect = passage.answers[parseInt(blankNum) - 1].toLowerCase() === word.toLowerCase();
  if (isCorrect) {
    blank.classList.add("correct");
    game.score += 10;
    game.stars += 1;
    document.getElementById("correct-sound").play();
    UI.showFeedback("Correct!", "green");
    UI.speak("Correct!");
  } else {
    blank.classList.add("incorrect");
    document.getElementById("incorrect-sound").play();
    UI.showFeedback(`Incorrect! The correct answer is ${passage.answers[parseInt(blankNum) - 1]}.`, "red");
    UI.speak("Incorrect! Try again.");
  }
}

function getNarrativeIntro(grammarType, index) {
  const intros = {
    prepositions: ["The wizard ventured ___ the dark forest.", "A magical bridge appeared ___ the river."],
    conjunctions: ["The dragon roared, ___ the wizard stood firm.", "The spell worked, ___ the kingdom cheered."]
  };
  return intros[grammarType] ? intros[grammarType][index % intros[grammarType].length] : "";
}

// Sample Passage Data (Expand as needed)
window.passages = {
  prepositions: {
    P1: [
      {
        text: "The wizard walked ___ (1)___ the forest ___ (2)___ find the lost treasure.",
        wordBox: ["to", "through", "in", "over"],
        answers: ["through", "to"],
        clueWords: [["forest"], ["find"]],
        hints: ["Think about moving inside something.", "Where are you going?"]
      }
    ],
    P2: [
      {
        text: "The dragon flew ___ (1)___ the castle ___ (2)___ protect the kingdom.",
        wordBox: ["around", "above", "to", "from"],
        answers: ["above", "to"],
        clueWords: [["castle"], ["protect"]],
        hints: ["Where is the dragon in the sky?", "What is the dragon’s goal?"]
      }
    ],
    P3: [
      {
        text: "The spell was cast ___ (1)___ the night ___ (2)___ the full moon.",
        wordBox: ["during", "under", "before", "after"],
        answers: ["during", "under"],
        clueWords: [["night"], ["moon"]],
        hints: ["When did it happen?", "What’s above the spell?"]
      }
    ]
  },
  conjunctions: {
    P1: [
      {
        text: "The wizard wanted to help, ___ (1)___ he was very tired.",
        wordBox: ["but", "and", "so"],
        answers: ["but"],
        clueWords: [["tired"]],
        hints: ["What shows a contrast?"]
      }
    ]
  }
};

// Initialize Game and Set Up Event Listeners
const game = new Game();

UI.grammarSelect.addEventListener("change", () => {
  game.currentGrammarType = UI.grammarSelect.value;
  game.currentPassageIndex = 0;
  game.timeLeft = (UI.timerSettingSelect.value === "off") ? 0 : parseInt(UI.timerSettingSelect.value);
  UI.displayPassage(game);
  UI.updateStatus(game);
});

UI.difficultySelect.addEventListener("change", () => {
  game.currentDifficulty = UI.difficultySelect.value;
  game.currentPassageIndex = 0;
  game.timeLeft = (UI.timerSettingSelect.value === "off") ? 0 : parseInt(UI.timerSettingSelect.value);
  UI.displayPassage(game);
  UI.updateStatus(game);
});

UI.nextPassageButton.addEventListener("click", () => {
  const blanks = document.querySelectorAll(".blank");
  let allFilled = true;
  blanks.forEach(blank => {
    if (!blank.classList.contains("filled")) allFilled = false;
  });
  if (allFilled) {
    const rewardMessage = getRewardMessage(game.currentGrammarType);
    UI.showFeedback(rewardMessage, "green");
    UI.speak(rewardMessage);
    if (game.challengeMode) {
      if (Object.keys(game.hintUsage).length === 0) {
        game.score += 20;
        UI.showFeedback(UI.feedbackDisplay.textContent + ' <span class="bonus">+20!</span>', "green");
        UI.speak("Bonus! 20 extra points for no hints.");
      }
      if (game.timeLeft > (parseInt(UI.timerSettingSelect.value) * 0.5)) {
        game.score += 10;
        UI.showFeedback(UI.feedbackDisplay.textContent + ' <span class="bonus">+10!</span>', "green");
        UI.speak("Plus 10 extra points for quick completion.");
      }
    }
    let correctCount = 0;
    blanks.forEach(blank => {
      if (blank.classList.contains("correct")) correctCount++;
    });
    game.saveProgress(correctCount, blanks.length);
    game.adjustDifficulty();
  }
  clearInterval(game.timerInterval);
  game.currentPassageIndex++;
  if (game.currentPassageIndex >= window.passages[game.currentGrammarType][game.currentDifficulty].length) {
    UI.showFeedback("Game Over! Final Score: " + game.score, "green");
    UI.speak("Game Over! Your final score is " + game.score);
    return;
  }
  game.timeLeft = (UI.timerSettingSelect.value === "off") ? 0 : parseInt(UI.timerSettingSelect.value);
  UI.displayPassage(game);
  UI.updateStatus(game);
});

UI.prevPassageButton.addEventListener("click", () => {
  if (game.currentPassageIndex > 0) {
    game.currentPassageIndex--;
    game.timeLeft = (UI.timerSettingSelect.value === "off") ? 0 : parseInt(UI.timerSettingSelect.value);
    UI.displayPassage(game);
    UI.updateStatus(game);
  }
});

UI.toggleThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  UI.toggleThemeButton.textContent = document.body.classList.contains("light-mode")
    ? "Switch to Dark Mode"
    : "Switch to Light Mode";
});

UI.sidebarToggle.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("open");
});

UI.toggleDyslexiaButton.addEventListener("click", () => {
  document.body.classList.toggle("dyslexia");
});

UI.textSizeSlider.addEventListener("input", () => {
  UI.passageText.style.fontSize = `${UI.textSizeSlider.value}rem`;
  UI.wordBox.style.fontSize = `${UI.textSizeSlider.value}rem`;
});

UI.toggleChallengeButton.addEventListener("click", () => {
  game.challengeMode = !game.challengeMode;
  UI.toggleChallengeButton.textContent = game.challengeMode ? "⏱️ Challenge" : "⏱️ Practice";
  if (game.challengeMode) game.startTimer();
  else clearInterval(game.timerInterval);
  UI.updateStatus(game);
});

UI.startQuestButton.addEventListener("click", () => {
  UI.storylineModal.style.display = "none";
  UI.displayPassage(game);
});

function getRewardMessage(grammarType) {
  const messages = {
    prepositions: "Well done! The kingdom’s paths are clearer now!",
    conjunctions: "Great work! The story flows perfectly!"
  };
  return messages[grammarType] || "Excellent job, young wizard!";
}

// Initial Display
UI.displayPassage(game);
UI.updateStatus(game);
