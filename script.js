// ====================================
// 🎯 Part 1: JavaScript Basics
// ====================================
let userName = "Tech_Trader001";
let age = 22;
let isStudent = true;

if (age >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

// ====================================
// ❤️ Part 2: Functions
// ====================================

// Function 1: Calculate total
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function 2: Toggle content
function toggleMessage() {
  let greeting = document.getElementById("greeting");
  if (greeting.textContent === "Hello, welcome to JavaScript practice!") {
    greeting.textContent = "Message toggled! 🎉";
  } else {
    greeting.textContent = "Hello, welcome to JavaScript practice!";
  }
}

// ====================================
// 🔁 Part 3: Loops
// ====================================

// Example 1: Simple countdown using for loop
for (let i = 5; i > 0; i--) {
  console.log(`Countdown: ${i}`);
}

// Example 2: Iterating through an array
let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grape"];
fruits.forEach(fruit => console.log(fruit));

// ====================================
// 🌐 Part 4: DOM Manipulation
// ====================================

// 1. Toggle text when button is clicked
document.getElementById("toggleBtn").addEventListener("click", toggleMessage);

// 2. Display calculation result in DOM
document.getElementById("calcBtn").addEventListener("click", function() {
  let total = calculateTotal(500, 3); // Example: 500 * 3
  document.getElementById("output").textContent = `Total price = ₦${total}`;
});

// 3. Generate a dynamic list
document.getElementById("listBtn").addEventListener("click", function() {
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<strong>My Favorite Fruits:</strong><br>";
  for (let i = 0; i < fruits.length; i++) {
    outputDiv.innerHTML += fruits[i] + "<br>";
  }
});
