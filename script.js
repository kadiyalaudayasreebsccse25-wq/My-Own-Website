const tips = [
  "Take a deep breath and stretch your body.",
  "Drink a glass of water right now!",
  "Look away from your screen for 20 seconds.",
  "Sit up straight and relax your shoulders.",
  "Take a short walk — even 5 minutes helps!",
  "Smile! It instantly boosts your mood.",
  "Think of one thing you're grateful for today.",
  "Close your eyes and rest for a moment."
];

document.getElementById("tipButton").addEventListener("click", function() {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tipDisplay").textContent = randomTip;
});