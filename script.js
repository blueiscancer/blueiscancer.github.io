// Get modal
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

// Add click event for all images
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

// Close modal
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Close modal when clicking outside the image
window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
