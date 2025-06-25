const menu = {
  appetizers: [
    {
      name: "Avocado Spring Rolls",
      price: "$8",
      image: "img/avacado-spring.jpeg",
      description: "Fresh avocado with crisp veggies and herbs wrapped in rice paper. Served chilled with dipping sauce."
    },
    {
      name: "Lime Zest Edamame",
      price: "$6",
      image: "img/lime-zest.jpeg",
      description: "Steamed edamame tossed in lime zest and sea salt for a zippy snack."
    }
  ],
  mains: [
    {
      name: "Herb-Crusted Salmon",
      price: "$18",
      image: "img/grilled-salmon.jpeg",
      description: "Pan-seared salmon topped with a fresh herb crust, served with seasonal vegetables."
    },
    {
      name: "Lime Grilled Chicken",
      price: "$16",
      image: "img/chicken.jpeg",
      description: "Grilled chicken breast marinated in lime and herbs for a juicy, flavorful main."
    },
    {
      name: "Green Goddess Pasta",
      price: "$15",
      image: "img/green-pasta.jpeg",
      description: "Pasta tossed in a creamy green herb sauce with seasonal greens and a hint of lemon."
    }
  ],
  desserts: [
    {
      name: "Key Lime Cheesecake",
      price: "$7",
      image: "img/key-lime.jpeg",
      description: "Rich and tangy cheesecake with a graham crust and key lime zest."
    },
    {
      name: "Matcha Tiramisu",
      price: "$8",
      image: "img/match-tiramisu.jpeg",
      description: "A modern twist on a classic—matcha-soaked layers with creamy mascarpone."
    }
  ],
  drinks: [
    {
      name: "Green Apple Spritzer",
      price: "$4",
      image: "img/apple-spritz.jpeg",
      description: "A fizzy, refreshing mix of green apple and sparkling water with a citrus twist."
    },
    {
      name: "Cucumber Lime Agua Fresca",
      price: "$4",
      image: "img/cucumber-lime.jpeg",
      description: "Cool and hydrating blend of cucumber, lime, and a splash of natural sweetness."
    }
  ]
};

function showTab(category) {
  const content = document.getElementById("menu-content");
  content.innerHTML = "";

  menu[category].forEach(item => {
  const card = document.createElement("div");
  card.className = "menu-card";
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="menu-image">
    <span><strong>${item.name}</strong></span>
    <span>${item.price}</span>
    <p class="menu-description">${item.description}</p>
  `;
  content.appendChild(card);
});


  document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.tab[onclick*="${category}"]`).classList.add("active");
}

// Show default tab
window.onload = () => {
  showTab("mains");
};
