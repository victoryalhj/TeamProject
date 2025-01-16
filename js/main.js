// Main page
// heart icon change
const heartButtons = document.querySelectorAll('.heart');

heartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    event.preventDefault();
    const icon = button.querySelector('i');

    if (icon.classList.contains('fa-heart')) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
    } else {
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular');
    }
  });
});

const closeButton = document.getElementById('closeButton');
const footerArea = document.getElementById('footerArea');

closeButton.addEventListener('click', () => {
  if (footerArea.classList.contains('hidden')) {
    footerArea.classList.remove('hidden');
    footerArea.classList.add('visible');
  } else {
    footerArea.classList.remove('visible');
    footerArea.classList.add('hidden');
  }
});
