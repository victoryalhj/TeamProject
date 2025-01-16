// Main page
// heart icon change
const heartButtons = document.querySelectorAll('.heart');

heartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    event.preventDefault();
    const icon = button.querySelector('i');

    if (icon.classList.contains('fa-heart')) {
      // 기존 아이콘을 채워진 하트로 변경
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
    } else {
      // 채워진 하트를 기존 아이콘으로 변경
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular');
    }
  });
});
