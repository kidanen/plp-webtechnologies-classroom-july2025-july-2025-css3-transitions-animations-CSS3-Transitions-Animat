// =========================
// Part 2: JavaScript Functions
// =========================

// Function to calculate area (demonstrates parameters, return, and scope)
function calculateArea(width, height) {
    const area = width * height; // local scope variable
    return area;
  }
  
  // Event listener for calculation
  const calculateBtn = document.getElementById("calculateBtn");
  calculateBtn.addEventListener("click", () => {
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    
    if (!isNaN(width) && !isNaN(height)) {
      const area = calculateArea(width, height); // using function
      document.getElementById("areaOutput").textContent = `Area: ${area} sq units`;
    } else {
      document.getElementById("areaOutput").textContent = "Please enter valid numbers.";
    }
  });
  
  // =========================
  // Part 3: Triggering CSS Animations with JS
  // =========================
  const animateBoxBtn = document.getElementById("animateBoxBtn");
  const animatedBox = document.getElementById("animatedBox");
  
  animateBoxBtn.addEventListener("click", () => {
    // Remove the class if it's already there
    animatedBox.classList.remove("jump");
  
    // Force reflow to reset animation
    void animatedBox.offsetWidth;
  
    // Add the class again to trigger animation
    animatedBox.classList.add("jump");
  });
  
  
  // Example: you can call triggerAnimation(animatedBox, 'jump') anywhere
  