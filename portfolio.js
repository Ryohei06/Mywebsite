document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const caption = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  const zoomImages = document.querySelectorAll(".zoom-img");

  zoomImages.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      caption.innerText = img.alt;
    });
  });

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  // Close on overlay click
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
});
