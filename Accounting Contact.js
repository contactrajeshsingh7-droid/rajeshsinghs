const cards = document.querySelectorAll('.contact-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});
document.addEventListener("DOMContentLoaded", function () {

  const cards = document.querySelectorAll(".contact-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
    });
  });

});


