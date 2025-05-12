document.getElementById('closeModal').addEventListener('click', function () {
  document.getElementById('addSkillModal').style.display = 'none';
  document.body.style.overflow = '';
});

function openModal() {
  document.getElementById('addSkillModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
