document.addEventListener("DOMContentLoaded", () => {
  const comment = document.querySelector(".rm-comment");
  const error = document.querySelector(".rmError");
  const btnSave = document.querySelector(".btnSave");
  const btnEscalate = document.querySelector(".btnEscalate");

  if (!comment || !error) return;

  const hasMinWords = (text) => {
    return text.trim().split(/\s+/).length >= 3;
  };

  const validateComment = () => {
    if (!hasMinWords(comment.value)) {
      error.classList.remove("hidden");
      comment.focus();
      return false;
    }
    error.classList.add("hidden");
    return true;
  };

  btnSave?.addEventListener("click", () => {
    if (!validateComment()) return;
    alert("გადაწყვეტილება შენახულია)");
  });

  btnEscalate?.addEventListener("click", () => {
    if (!validateComment()) return;
    alert("ქეისი გადამისამართდა დეპარტამენტის ხელმძღვანელთან ");
  });

  // UX: როცა წერს, error გაქრეს
  comment.addEventListener("input", () => {
    if (hasMinWords(comment.value)) {
      error.classList.add("hidden");
    }
  });
});

document.querySelectorAll(".case-row").forEach((row) => {
  row.addEventListener("click", () => {
    const applicationId = row.dataset.id;
    window.location.href = `details.html?id=${applicationId}`;
  });
});
