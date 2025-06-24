const menu = {
  appetizers: [
    { name: "Avocado Spring Rolls", price: "$8" },
    { name: "Lime Zest Edamame", price: "$6" },
  ],
  mains: [
    { name: "Herb-Crusted Salmon", price: "$18" },
    { name: "Lime Grilled Chicken", price: "$16" },
    { name: "Green Goddess Pasta", price: "$15" },
  ],
  desserts: [
    { name: "Key Lime Cheesecake", price: "$7" },
    { name: "Matcha Tiramisu", price: "$8" },
  ],
  drinks: [
    { name: "Green Apple Spritzer", price: "$4" },
    { name: "Cucumber Lime Agua Fresca", price: "$4" },
  ],
};

function showTab(category) {
  const content = document.getElementById("menu-content");
  content.innerHTML = "";

  menu[category].forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML = `<span>${item.name}</span><span>${item.price}</span>`;
    content.appendChild(card);
  });

  document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.tab[onclick*="${category}"]`).classList.add("active");
}

// Show default tab
window.onload = () => {
  showTab("mains");
};
