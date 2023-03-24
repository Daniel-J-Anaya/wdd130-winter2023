// Javascript for Cards for HiddenGems | Daniel Anaya

document.addEventListener("DOMContentLoaded", function() {
  console.log("JS is working");
  const cardLinks = document.querySelectorAll(".card-link");
  console.log("card links retrieved")
  // Loop through each link and add a click event listener
  cardLinks.forEach(link => {
    link.addEventListener("click", function() {
      console.log("Clicked on a card link");

      // Create a new card element and add it to the map container
      const card = document.createElement("div");
      card.classList.add("card");
      const mapContainer = document.querySelector(".map-container");
      mapContainer.appendChild(card);

      // Create card content elements and add them to the card
      const cardContent = document.createElement("div");
      cardContent.classList.add("card-content");
      card.appendChild(cardContent);

      // Create close button element and add it to the card content
      const closeButton = document.createElement("div");
      closeButton.classList.add("close-btn");
      closeButton.innerHTML = "&times;";
      closeButton.addEventListener("click", function() {
        card.remove();
      });
      cardContent.appendChild(closeButton);

      // Add title and content to the card content
      const title = document.createElement("h1");
      title.textContent = "Title";
      cardContent.appendChild(title);
      const content = document.createElement("p");
      content.textContent = "Card Content";
      cardContent.appendChild(content);

      // Determine which link was clicked and add the appropriate styles
      if (link.classList.contains("north-america")) {
        card.classList.add("north-america-card")
        title.textContent = "North America";
        content.textContent = "North America is a continent in the Northern Hemisphere and almost entirely within the Western Hemisphere. It is bordered to the north by the Arctic Ocean, to the east by the Atlantic Ocean, to the southeast by South America and the Caribbean Sea, and to the west and south by the Pacific Ocean.";
      } else if (link.classList.contains("south-america")) {
        card.classList.add("south-america-card")
        title.textContent = "South America";
        content.textContent = "South America, the fourth-largest continent, extends from the Gulf of Darién in the northwest to the Tierra del Fuego archipelago in the south. Along with the islands of Tierra del Fuego, the continent includes the Galápagos Islands (Ecuador), Easter Island (Chile), the Falkland Islands (United Kingdom), and the Chiloé and Juan Fernández archipelagos (Chile).";
      } else if (link.classList.contains("europe")) {
        card.classList.add("europe-card")
        title.textContent = "Europe";
        content.textContent = "Europe is the western part of the continent of Eurasia, often thought of as its own continent. It is separated from Asia by the Ural Mountains in Russia and the Bosporus strait in Turkey. Europe is bordered by water on three sides.";
      } else if (link.classList.contains("africa")) {
        card.classList.add("africa-card")
        title.textContent = "Africa";
        content.textContent = "Africa, the second largest continent (after Asia), covering about one-fifth of the total land surface of Earth. The continent is bounded on the west by the Atlantic Ocean, on the north by the Mediterranean Sea, on the east by the Red Sea and the Indian Ocean, and on the south by the mingling waters of the Atlantic and Indian oceans.";
      } else if (link.classList.contains("asia")) {
        card.classList.add("asia-card")
        title.textContent = "Asia";
        content.textContent = "Asia, the world’s largest and most diverse continent. It occupies the eastern four-fifths of the giant Eurasian landmass. Asia is more a geographic term than a homogeneous continent, and the use of the term to describe such a vast area always carries the potential of obscuring the enormous diversity among the regions it encompasses.";
      } else if (link.classList.contains("australia")) {
        card.classList.add("australia-card")
        title.textContent = "Australia";
        content.textContent = "Australia, the smallest continent and one of the largest countries on Earth, lying between the Pacific and Indian oceans in the Southern Hemisphere.";
      }
    });
  });
});
