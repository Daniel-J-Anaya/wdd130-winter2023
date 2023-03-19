// Javascript for Cards for HiddenGems | Daniel Anaya

const cardLinks = document.querySelectorAll(".card-link");

cardLinks.forEach(function(cardLink) {
  cardLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link

    // Create the card element
    const card = document.createElement("div");
    card.classList.add("card");

    // Create the card header
    const cardHeader = document.createElement("h2");
    cardHeader.textContent = "Card Header";
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);

    // Create the card body
    const cardBody = document.createElement("p");
    cardBody.textContent = "Card content goes here.";
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    // Append the card element to the body
    document.body.appendChild(card);
    // logic to display card
  });
});
