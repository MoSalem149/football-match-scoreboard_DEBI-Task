// Step 1: Create player arrays for each team
const players1 = [
  "Neuer",
  "Pavard",
  "Boateng",
  "Alaba",
  "Davies",
  "Kimmich",
  "Goretzka",
  "Muller",
  "Gnabry",
  "Lewandowski",
  "Coman",
];

const players2 = [
  "Oblak",
  "Trippier",
  "Savic",
  "Felipe",
  "Lodi",
  "Herrera",
  "Koke",
  "Saul",
  "Llorente",
  "Carrasco",
  "Costa",
];

// Step 2: Extract goalkeeper and field players
const gk1 = players1[0];
const fieldPlayers1 = players1.slice(1);

const gk2 = players2[0];
const fieldPlayers2 = players2.slice(1);

// Step 3: Create an array containing all players of both teams
const allPlayers = [...players1, ...players2];

// Step 6: Create variables for each odd
const odds = {
  team1: 1.33,
  draw: 3.25,
  team2: 6.5,
};

const { team1, draw, team2 } = odds;

// Display players on the webpage
document.getElementById("goalkeeper1").innerText = `Goalkeeper: ${gk1}`;
document.getElementById("fieldPlayers1").innerHTML = fieldPlayers1
  .map((player) => `<li>${player}</li>`)
  .join("");

document.getElementById("goalkeeper2").innerText = `Goalkeeper: ${gk2}`;
document.getElementById("fieldPlayers2").innerHTML = fieldPlayers2
  .map((player) => `<li>${player}</li>`)
  .join("");

// Display odds
document.getElementById("team1Odds").innerText = team1;
document.getElementById("drawOdds").innerText = draw;
document.getElementById("team2Odds").innerText = team2;

// Step 4: Show all players when the button is clicked
document.getElementById("showPlayers").addEventListener("click", () => {
  allPlayers.forEach((player) => console.log(player));
});

// Step 5: Handle substitution
document.getElementById("makeSubstitution").addEventListener("click", () => {
  const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
  alert(`New players list after substitution: ${players1Final.join(", ")}`);
});

// Step 7: Print goals function
function printGoals(...players) {
  console.log(`${players.length} goals were scored`);
  players.forEach((player) => console.log(player));
}

// Example usage of printGoals function
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// Step 8: Determine likely winner
const likelyWinner =
  (team1 < team2 && "Bayern Munich (Team 1)") || "Atletico Madrid (Team 2)";
document.getElementById(
  "likelyWinner"
).innerText = `${likelyWinner} is more likely to win.`;
